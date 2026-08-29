import React, { useMemo } from 'react';

export default function FloatingWheatBackground() {
  // Generate 24 floating wheat grains with randomized positions, speed, size, and delay
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => {
      const left = (i * 4.2 + (i % 5) * 3) % 96 + 2; // Spread across 2% - 98% width
      const size = Math.floor(Math.random() * 24) + 16; // 16px to 40px
      const duration = Math.floor(Math.random() * 12) + 14; // 14s to 26s float duration
      const delay = (Math.random() * -20).toFixed(2); // Negative delay so particles are immediately visible
      const opacity = (Math.random() * 0.35 + 0.15).toFixed(2); // Soft subtle opacity (0.15 to 0.50)
      const swayDuration = Math.floor(Math.random() * 4) + 3; // 3s to 7s sway
      const isWheatSheaf = i % 3 === 0;

      return {
        id: i,
        left: `${left}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        opacity,
        swayDuration: `${swayDuration}s`,
        isWheatSheaf
      };
    });
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-60px',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `wheatFloatUp ${p.duration} linear infinite ${p.delay}, wheatSway ${p.swayDuration} ease-in-out infinite alternate`,
            filter: 'drop-shadow(0 4px 8px rgba(217, 155, 56, 0.3))'
          }}
        >
          {p.isWheatSheaf ? (
            /* Wheat Sheaf Icon SVG */
            <svg
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              fill="none"
              stroke="#d99b38"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 22 12 12" />
              <path d="M12 12 22 2" />
              <path d="M12 12c-2.5-3.5-2.5-7.5 0-10" />
              <path d="M12 12c2.5 3.5 2.5 7.5 0 10" />
              <path d="M12 12c-3.5 2.5-7.5 2.5-10 0" />
              <path d="M12 12c3.5-2.5 7.5-2.5 10 0" />
            </svg>
          ) : (
            /* Golden Wheat Kernel Grain SVG */
            <svg
              viewBox="0 0 32 32"
              width="100%"
              height="100%"
              fill="none"
            >
              <ellipse
                cx="16"
                cy="16"
                rx="8"
                ry="14"
                fill="url(#wheatGrainGrad)"
                transform="rotate(25 16 16)"
              />
              <path
                d="M16 4 C 15 12, 17 20, 16 28"
                stroke="#b87c22"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="wheatGrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4be6b" />
                  <stop offset="60%" stopColor="#d99b38" />
                  <stop offset="100%" stopColor="#b87c22" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      ))}

      <style>{`
        @keyframes wheatFloatUp {
          0% {
            transform: translateY(105vh) rotate(0deg) scale(0.7);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) scale(1.05);
          }
          100% {
            transform: translateY(-15vh) rotate(360deg) scale(0.8);
          }
        }

        @keyframes wheatSway {
          0% {
            margin-left: -25px;
          }
          100% {
            margin-left: 25px;
          }
        }
      `}</style>
    </div>
  );
}
