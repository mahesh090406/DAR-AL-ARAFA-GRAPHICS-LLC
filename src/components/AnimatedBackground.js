"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor follower
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Center the orb on cursor
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="animated-bg-container">
      {/* Base Background: Deep Slate/Black */}
      <div className="bg-base"></div>

      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="cursor-spotlight"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Fluid Color Orbs - Ambient */}
      <div className="orb orb-magenta"></div>
      <div className="orb orb-cyan"></div>
      <div className="orb orb-gold"></div>
      <div className="orb orb-yellow"></div>

      {/* Noise Texture Overlay */}
      <div className="grain-overlay"></div>

      <style jsx>{`
        .animated-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -1; 
          background-color: #020617; /* Slate 950 */
        }

        .bg-base {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%);
            opacity: 0.9;
        }

        .cursor-spotlight {
            position: absolute;
            top: 0; 
            left: 0;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%); /* Light blue glow */
            filter: blur(60px);
            mix-blend-mode: screen;
            pointer-events: none;
            z-index: 1; /* Above ambient orbs */
            will-change: transform;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px); /* Soft diffusion */
            opacity: 0.5;
            animation: float 25s infinite ease-in-out alternate;
            mix-blend-mode: screen; 
            will-change: transform; /* Force GPU */
        }

        /* CMYK Magenta */
        .orb-magenta {
            width: 55vw;
            height: 55vw;
            top: -15%;
            left: -15%;
            background: radial-gradient(circle, #db2777 0%, transparent 70%);
            animation-duration: 30s;
        }

        /* CMYK Cyan */
        .orb-cyan {
            width: 65vw;
            height: 65vw;
            bottom: -25%;
            right: -15%;
            background: radial-gradient(circle, #0891b2 0%, transparent 70%);
            animation-duration: 35s;
            animation-delay: -5s;
            opacity: 0.3; 
        }

        /* Gold */
        .orb-gold {
            width: 45vw;
            height: 45vw;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            background: radial-gradient(circle, #b45309 0%, transparent 70%);
            animation-duration: 28s;
            animation-delay: -10s;
            opacity: 0.4;
        }

        /* CMYK Yellow */
        .orb-yellow {
            width: 40vw;
            height: 40vw;
            bottom: 5%;
            left: 5%;
            background: radial-gradient(circle, #ca8a04 0%, transparent 70%);
            animation-duration: 32s;
            animation-delay: -15s;
            opacity: 0.35;
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 2;
        }

        @keyframes float {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(40px, -20px, 0) scale(1.05); }
            100% { transform: translate3d(-30px, 30px, 0) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
