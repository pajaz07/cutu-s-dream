import React from 'react';

interface PolaroidProps {
  imageSrc?: string;
  date: string;
  caption?: string;
  tilt?: number;
  className?: string;
}

const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  date,
  caption,
  tilt = 0,
  className = '',
}) => {
  return (
    <div
      className={`group relative inline-block transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-0 ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="bg-white p-3 pb-16 shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-sm relative">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-valentine-soft-pink overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={caption || 'Memory'} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-valentine-maroon/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          )}
        </div>
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="font-handwritten text-valentine-deep-maroon text-lg">{date}</p>
          {caption && (
            <p className="font-handwritten text-valentine-maroon text-sm mt-0.5 px-2">{caption}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Polaroid;
