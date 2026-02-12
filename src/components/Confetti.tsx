import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  type: 'heart' | 'circle' | 'sparkle';
}

const Confetti: React.FC<{ active: boolean }> = ({ active }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (active) {
      const colors = [
        'hsl(340, 100%, 76%)',
        'hsl(340, 100%, 92%)',
        'hsl(350, 100%, 88%)',
        'hsl(345, 100%, 25%)',
        'hsl(0, 0%, 100%)',
        'hsl(340, 80%, 65%)',
      ];
      const types: ('heart' | 'circle' | 'sparkle')[] = ['heart', 'circle', 'sparkle'];
      const newPieces = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 16,
        type: types[Math.floor(Math.random() * types.length)],
      }));
      setPieces(newPieces);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: '-5%',
            color: piece.color,
            fontSize: `${piece.size}px`,
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`,
          }}
        >
          {piece.type === 'heart' ? '♥' : piece.type === 'sparkle' ? '✦' : '●'}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
