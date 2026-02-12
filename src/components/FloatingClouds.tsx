import React, { useMemo } from 'react';

const FloatingClouds: React.FC = () => {
  const clouds = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: 10 + Math.random() * 70,
      top: 5 + Math.random() * 30,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 10,
      scale: 0.6 + Math.random() * 0.8,
      opacity: 0.1 + Math.random() * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute text-white"
          style={{
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
            opacity: cloud.opacity,
            transform: `scale(${cloud.scale})`,
            animation: `float-cloud ${cloud.duration}s ease-in-out ${cloud.delay}s infinite`,
            fontSize: '80px',
          }}
        >
          ☁
        </div>
      ))}
    </div>
  );
};

export default FloatingClouds;
