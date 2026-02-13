import React, { useRef, useState } from 'react';
import Polaroid from '@/components/Polaroid';
import FloatingHearts from '@/components/FloatingHearts';
import TwinklingStars from '@/components/TwinklingStars';
import FloatingClouds from '@/components/FloatingClouds';
import MusicToggle from '@/components/MusicToggle';
import Confetti from '@/components/Confetti';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

const ScrollButton: React.FC<{ text: string; targetId: string; containerRef: React.RefObject<HTMLDivElement> }> = ({ text, targetId, containerRef }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target && containerRef.current) {
      containerRef.current.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-8 px-8 py-3 rounded-full bg-white/70 backdrop-blur-sm text-valentine-maroon font-handwritten text-xl shadow-lg hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 border border-primary/20"
      style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
    >
      {text}
    </button>
  );
};

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-snap-section flex flex-col items-center justify-center px-4 py-12 relative ${className}`}
    >
      <div
        className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {children}
      </div>
    </section>
  );
};

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null!);

  const handleProposal = () => {
    setShowConfetti(true);
    setTimeout(() => setShowModal(true), 800);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-valentine-blush via-valentine-baby-pink to-valentine-soft-pink">
      {/* Background effects */}
      <FloatingHearts />
      <TwinklingStars />
      <FloatingClouds />
      <MusicToggle />
      <Confetti active={showConfetti} />

      {/* Fairy lights top bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-40 flex justify-around pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            style={{ animation: `fairy-light ${1.5 + Math.random()}s ease-in-out ${Math.random() * 2}s infinite` }}
          />
        ))}
      </div>

      <div ref={scrollRef} className="scroll-snap-container relative z-10">
        {/* Section 1: Intro */}
        <Section id="section-intro">
          <h1 className="font-elegant text-5xl sm:text-6xl md:text-7xl text-valentine-maroon mb-8 drop-shadow-sm">
            Bubu & Cutu
          </h1>
          <Polaroid imageSrc="/pic1.jpg" date="21st October 2023" />
          
          <p className="font-handwritten text-valentine-maroon/70 text-lg mt-4">Where it all started...</p>
          <ScrollButton text="The journey begins…" targetId="section-2024" containerRef={scrollRef} />
        </Section>

        {/* Section 2: Year 2024 */}
        <Section id="section-2024">
          <div className="max-w-4xl w-full rounded-[25px] bg-valentine-maroon/5 border border-valentine-maroon/10 p-6 sm:p-10 shadow-xl backdrop-blur-sm"
               style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Polaroid date="2024" tilt={3} />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-handwritten text-3xl sm:text-4xl text-valentine-maroon mb-4">Our Year Together</h2>
                <p className="font-body text-foreground/70 leading-relaxed text-sm sm:text-base">
                  (Bubu will write something special here for cutu ❤️)
                </p>
                <p className="font-body text-foreground/50 leading-relaxed text-sm mt-3 italic">
                  Every moment with you became a memory I'll treasure forever. Your smile, your laugh, the way you make everything feel magical...
                </p>
              </div>
            </div>
          </div>
          <ScrollButton text="Our love grew stronger…" targetId="section-2025" containerRef={scrollRef} />
        </Section>

        {/* Section 3: Year 2025 */}
        <Section id="section-2025">
          <div className="max-w-4xl w-full rounded-[25px] bg-valentine-maroon/5 border border-valentine-maroon/10 p-6 sm:p-10 shadow-xl backdrop-blur-sm"
               style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <Polaroid date="2025" tilt={-3} />
              <div className="flex-1 text-center md:text-right">
                <h2 className="font-handwritten text-3xl sm:text-4xl text-valentine-maroon mb-4">Growing Stronger</h2>
                <p className="font-body text-foreground/70 leading-relaxed text-sm sm:text-base">
                  (Bubu will write something special here for cutu ❤️)
                </p>
                <p className="font-body text-foreground/50 leading-relaxed text-sm mt-3 italic">
                  With every passing day, I fall more in love with you. You are my today, my tomorrow, my forever...
                </p>
              </div>
            </div>
          </div>
          <ScrollButton text="Forever feels right with you…" targetId="section-proposal" containerRef={scrollRef} />
        </Section>

        {/* Section 4: The Proposal */}
        <Section id="section-proposal">
          <Polaroid
            date="2025"
            caption="Will you be my Valentine..?"
            tilt={0}
            className={showConfetti ? '' : ''}
          />
          <div
            className={`mt-8 flex flex-col sm:flex-row gap-4 ${showConfetti ? 'pointer-events-none opacity-50' : ''}`}
          >
            <button
              onClick={handleProposal}
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-handwritten text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 border-2 border-white/30"
              style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
            >
              Yes 💖
            </button>
            <button
              onClick={handleProposal}
              className="px-10 py-4 rounded-full bg-valentine-maroon text-white font-handwritten text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 border-2 border-white/20"
              style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
            >
              Definitely Yesss 💞
            </button>
          </div>
        </Section>

        {/* Footer */}
        <div className="text-center py-6 relative z-10">
          <p className="font-handwritten text-valentine-maroon/50 text-lg">
            Made with all my love — bubu ❤️
          </p>
        </div>
      </div>

      {/* Proposal Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-white/95 backdrop-blur-xl border-primary/30 rounded-3xl shadow-2xl max-w-sm mx-auto text-center p-8"
                       style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}>
          <DialogTitle className="sr-only">Love Message</DialogTitle>
          <div className="space-y-4">
            <p className="text-5xl">❤️</p>
            <h2 className="font-elegant text-4xl text-valentine-maroon">
              I lovee youuuu, my baby
            </h2>
            <p className="font-handwritten text-2xl text-valentine-maroon/70">
              — bubu
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
