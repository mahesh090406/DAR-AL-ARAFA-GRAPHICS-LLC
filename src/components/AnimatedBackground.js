"use client";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg-container">
      {/* Base Background: Deep Colorful Mix */}
      <div className="bg-base"></div>

      {/* Fluid Color Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>

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
          background-color: #0A0A0A; /* Very Dark Base */
        }

        .bg-base {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, #2E1065 0%, #000000 100%);
            opacity: 0.8;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            animation: float 20s infinite ease-in-out alternate;
            mix-blend-mode: screen; /* Vibrant blending */
        }

        /* Hot Pink / Magenta */
        .orb-1 {
            width: 60vw;
            height: 60vw;
            top: -10%;
            left: -10%;
            background: radial-gradient(circle, #db2777 0%, transparent 70%);
            animation-duration: 25s;
        }

        /* Cyan / Blue */
        .orb-2 {
            width: 70vw;
            height: 70vw;
            bottom: -20%;
            right: -10%;
            background: radial-gradient(circle, #0284c7 0%, transparent 70%);
            animation-duration: 30s;
            animation-delay: -5s;
        }

        /* Vibrant Purple */
        .orb-3 {
            width: 50vw;
            height: 50vw;
            top: 40%;
            left: 40%;
            background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
            animation-duration: 22s;
            animation-delay: -10s;
        }

        /* Bright Yellow/Orange Accent */
        .orb-4 {
            width: 40vw;
            height: 40vw;
            bottom: 10%;
            left: 10%;
            background: radial-gradient(circle, #f59e0b 0%, transparent 70%);
            animation-duration: 28s;
            animation-delay: -15s;
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.07;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        @keyframes float {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -30px) scale(1.1); }
            100% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
