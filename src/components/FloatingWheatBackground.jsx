import React, { useMemo } from 'react';

export default function FloatingWheatBackground({ 
  isAbsolute = false, 
  zIndex = 0, 
  count = 32,
  opacityBoost = 1.0 
}) {
  // Generate falling wheat particles with randomized parameters for natural background motion
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = ((i * 3.1 + (i % 7) * 4.3 + Math.random() * 3) % 98) + 1; // 1% to 99% width
      const size = Math.floor(Math.random() * 20) + 16; // 16px to 36px
      const duration = (Math.random() * 8 + 9).toFixed(2); // 9s to 17s fall duration
      const delay = (Math.random() * -20).toFixed(2); // Negative delay for immediate full distribution
      const baseOpacity = Math.random() * 0.25 + 0.18; // 0.18 to 0.43
      const opacity = Math.min(0.75, (baseOpacity * opacityBoost)).toFixed(2);
      const swayDuration = (Math.random() * 3 + 3).toFixed(2); // 3s to 6s horizontal sway
      const swayAmount = Math.floor(Math.random() * 35) + 15; // 15px to 50px sway amplitude
      const rotationSpeed = (Math.random() * 6 + 4).toFixed(2); // 4s to 10s 3D tumble
      const variant = i % 3; // 0: Wheat Stalk/Ear, 1: Golden Grain Kernel, 2: Single Spikelet Husk

      return {
        id: `${isAbsolute ? 'hero' : 'global'}-${i}`,
        left: `${left}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        opacity,
        swayDuration: `${swayDuration}s`,
        swayAmount: `${swayAmount}px`,
        rotationSpeed: `${rotationSpeed}s`,
        variant
      };
    });
  }, [count, opacityBoost, isAbsolute]);

  return (
    <div 
      style={{
        position: isAbsolute ? 'absolute' : 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: isAbsolute ? zIndex : 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: '-60px',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `wheatFall ${p.duration} linear infinite ${p.delay}`,
            willChange: 'transform'
          }}
        >
          {/* Inner swaying & 3D tumbling container */}
          <div
            style={{
              width: '100%',
              height: '100%',
              animation: `wheatSway ${p.swayDuration} ease-in-out infinite alternate, wheatTumble ${p.rotationSpeed} linear infinite`,
              filter: 'drop-shadow(0 3px 6px rgba(217, 155, 56, 0.35))'
            }}
          >
            {p.variant === 0 ? (
              /* Variant 0: Detailed Golden Wheat Stalk / Ear */
              <svg viewBox="0 0 36 64" width="100%" height="100%" fill="none">
                <defs>
                  <linearGradient id={`stalkGrad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f7d070" />
                    <stop offset="40%" stopColor="#d99b38" />
                    <stop offset="100%" stopColor="#a36b19" />
                  </linearGradient>
                </defs>
                {/* Central Stem */}
                <path d="M18 4 L18 60" stroke="#b87c22" strokeWidth="1.5" strokeLinecap="round" />
                {/* Wheat Awn Bristles */}
                <path d="M18 4 L12 0 M18 4 L24 0 M18 4 L18 -3" stroke="#f4be6b" strokeWidth="1" strokeLinecap="round" />
                {/* Left Grains */}
                <ellipse cx="13" cy="12" rx="4.5" ry="7" fill={`url(#stalkGrad-${p.id})`} transform="rotate(-30 13 12)" />
                <path d="M10 8 L5 2" stroke="#f4be6b" strokeWidth="0.9" strokeLinecap="round" />
                <ellipse cx="13" cy="24" rx="4.5" ry="7" fill={`url(#stalkGrad-${p.id})`} transform="rotate(-30 13 24)" />
                <path d="M10 20 L4 14" stroke="#f4be6b" strokeWidth="0.9" strokeLinecap="round" />
                <ellipse cx="13" cy="36" rx="4.5" ry="7" fill={`url(#stalkGrad-${p.id})`} transform="rotate(-30 13 36)" />
                <path d="M10 32 L4 26" stroke="#f4be6b" strokeWidth="0.9" strokeLinecap="round" />
                
                {/* Right Grains */}
                <ellipse cx="23" cy="18" rx="4.5" ry="7" fill={`url(#stalkGrad-${p.id})`} transform="rotate(30 23 18)" />
                <path d="M26 14 L32 8" stroke="#f4be6b" strokeWidth="0.9" strokeLinecap="round" />
                <ellipse cx="23" cy="30" rx="4.5" ry="7" fill={`url(#stalkGrad-${p.id})`} transform="rotate(30 23 30)" />
                <path d="M26 26 L32 20" stroke="#f4be6b" strokeWidth="0.9" strokeLinecap="round" />
                <ellipse cx="23" cy="42" rx="4.5" ry="7" fill={`url(#stalkGrad-${p.id})`} transform="rotate(30 23 42)" />
                <path d="M26 38 L32 32" stroke="#f4be6b" strokeWidth="0.9" strokeLinecap="round" />
                
                {/* Top Grain */}
                <ellipse cx="18" cy="8" rx="4" ry="6" fill={`url(#stalkGrad-${p.id})`} />
              </svg>
            ) : p.variant === 1 ? (
              /* Variant 1: Plump Golden Wheat Grain Kernel */
              <svg viewBox="0 0 32 32" width="100%" height="100%" fill="none">
                <defs>
                  <linearGradient id={`grainGrad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f9df88" />
                    <stop offset="45%" stopColor="#d99b38" />
                    <stop offset="100%" stopColor="#9a6210" />
                  </linearGradient>
                </defs>
                {/* Kernel Outer Body */}
                <ellipse
                  cx="16"
                  cy="16"
                  rx="7.5"
                  ry="13"
                  fill={`url(#grainGrad-${p.id})`}
                  transform="rotate(18 16 16)"
                />
                {/* Center Crease / Furrow */}
                <path
                  d="M15 5 C 13.5 12, 17.5 20, 16 27"
                  stroke="#7c4e0b"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                {/* Awn Hair at top */}
                <path
                  d="M17 4 L21 0"
                  stroke="#f4be6b"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Variant 2: Lightweight Golden Spikelet Husk */
              <svg viewBox="0 0 28 28" width="100%" height="100%" fill="none">
                <defs>
                  <linearGradient id={`huskGrad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdf0b5" />
                    <stop offset="50%" stopColor="#e5a73e" />
                    <stop offset="100%" stopColor="#b87c22" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 2 C 22 8, 25 18, 14 26 C 3 18, 6 8, 14 2 Z"
                  fill={`url(#huskGrad-${p.id})`}
                />
                <path
                  d="M14 2 L14 26"
                  stroke="#8f5b12"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                <path
                  d="M14 2 L18 -2"
                  stroke="#f4be6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes wheatFall {
          0% {
            transform: translateY(-80px);
          }
          100% {
            transform: translateY(112vh);
          }
        }

        @keyframes wheatSway {
          0% {
            transform: translateX(-28px);
          }
          50% {
            transform: translateX(28px);
          }
          100% {
            transform: translateX(-18px);
          }
        }

        @keyframes wheatTumble {
          0% {
            transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg);
          }
          50% {
            transform: rotateZ(180deg) rotateY(180deg) rotateX(45deg);
          }
          100% {
            transform: rotateZ(360deg) rotateY(360deg) rotateX(0deg);
          }
        }
      `}</style>
    </div>
  );
}

