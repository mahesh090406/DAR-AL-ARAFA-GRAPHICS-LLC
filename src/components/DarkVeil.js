'use client';
import { useLayoutEffect, useRef } from 'react';

const DarkVeil = ({
  hueShift = -20,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 1.3,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
  brightness = 1
}) => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    let animationFrameId;
    let startTime = Date.now();

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform float iHueShift;
      uniform float iNoiseIntensity;
      uniform float iScanlineIntensity;
      uniform float iScanlineFrequency;
      uniform float iWarpAmount;
      uniform float iBrightness;
      
      // Simplex 2D noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        
        // Warp effect
        float noiseVal = snoise(uv * 3.0 + iTime * 0.1);
        uv += noiseVal * 0.05 * iWarpAmount;

        // Dark Veil aesthetic base
        vec3 color = vec3(0.05, 0.05, 0.08); // Dark background
        
        // Dynamic flowing fog
        float f = 0.0;
        f += 0.500 * snoise(uv * 1.0 + iTime * 0.1);
        f += 0.250 * snoise(uv * 2.0 - iTime * 0.2);
        f += 0.125 * snoise(uv * 4.0 + iTime * 0.3);
        
        // Coloring
        color += vec3(0.1, 0.05, 0.2) * f; // Purple tint
        
        // Hue shift
        float hue = iHueShift / 360.0;
        // Simple hue rotation (approximate)
        color = vec3(
          color.r * cos(hue) - color.g * sin(hue),
          color.r * sin(hue) + color.g * cos(hue),
          color.b
        );

        // Noise
        float grain = fract(sin(dot(uv, vec2(12.9898, 78.233) * iTime)) * 43758.5453);
        color += (grain - 0.5) * iNoiseIntensity;

        // Scanlines
        float scanline = sin(uv.y * iResolution.y * iScanlineFrequency + iTime * 5.0);
        color -= (scanline + 1.0) * 0.5 * iScanlineIntensity;

        // Apply brightness
        color *= iBrightness;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader helper
    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Set up rectangle
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const timeLoc = gl.getUniformLocation(program, "iTime");
    const resolutionLoc = gl.getUniformLocation(program, "iResolution");
    const hueShiftLoc = gl.getUniformLocation(program, "iHueShift");
    const noiseLoc = gl.getUniformLocation(program, "iNoiseIntensity");
    const scanlineLoc = gl.getUniformLocation(program, "iScanlineIntensity");
    const scanlineFreqLoc = gl.getUniformLocation(program, "iScanlineFrequency");
    const warpLoc = gl.getUniformLocation(program, "iWarpAmount");
    const brightnessLoc = gl.getUniformLocation(program, "iBrightness");

    const resize = () => {
      canvas.width = window.innerWidth * resolutionScale;
      canvas.height = window.innerHeight * resolutionScale;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      const time = (Date.now() - startTime) * 0.001 * speed;
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(hueShiftLoc, hueShift);
      gl.uniform1f(noiseLoc, noiseIntensity);
      gl.uniform1f(scanlineLoc, scanlineIntensity);
      gl.uniform1f(scanlineFreqLoc, scanlineFrequency);
      gl.uniform1f(warpLoc, warpAmount);
      gl.uniform1f(brightnessLoc, brightness);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale, brightness]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }} />;
};

export default DarkVeil;
