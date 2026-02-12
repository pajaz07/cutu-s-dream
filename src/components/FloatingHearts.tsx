import React, { useMemo } from 'react';

const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      size: 10 + Math.random() * 16,
      opacity: 0.15 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `float-heart ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
