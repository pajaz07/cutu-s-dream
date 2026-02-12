import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Use a royalty-free soft piano melody placeholder
    const audio = new Audio('https://cdn.pixabay.com/audio/2024/11/29/audio_d84e517e55.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-valentine-maroon hover:bg-white hover:scale-110 transition-all duration-300"
      style={{ animation: isPlaying ? 'glow-pulse 2s ease-in-out infinite' : 'none' }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
};

export default MusicToggle;
