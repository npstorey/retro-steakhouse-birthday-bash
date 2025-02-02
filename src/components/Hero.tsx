import { useEffect, useState } from "react";
import { Tv, Music, Gift } from "lucide-react";

const slogans = [
  "Sizzle Into 1982!",
  "Funk, Flavor, and Filet!",
  "Where Retro Meets Rare!",
  "Steaks & Synthesizers!",
  "Time Travel Never Tasted Better!",
];

const Hero = () => {
  const [glitchText, setGlitchText] = useState(false);
  const [tvStatic, setTvStatic] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);

    // TV static effect interval
    const staticInterval = setInterval(() => {
      setTvStatic(true);
      setTimeout(() => setTvStatic(false), 100);
    }, 5000);

    // Slogan rotation interval
    const sloganInterval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 4000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(staticInterval);
      clearInterval(sloganInterval);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-steakhouse-wood overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-scanlines"></div>
      
      {/* TV Static Effect */}
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20 transition-opacity duration-100 ${tvStatic ? 'opacity-40' : 'opacity-20'}`}></div>
      
      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-steakhouse-blue animate-pulse">
        <Tv size={32} className="filter drop-shadow-[0_0_8px_rgba(30,174,219,0.8)]" />
      </div>
      <div className="absolute top-10 right-10 text-steakhouse-pink animate-pulse">
        <Music size={32} className="filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-steakhouse-cream animate-bounce">
        <Gift size={32} className="filter drop-shadow-[0_0_8px_rgba(226,232,240,0.8)]" />
      </div>
      
      <div className="relative z-10 text-center px-4 space-y-8">
        <h1 className={`text-6xl md:text-8xl font-display mb-6 ${glitchText ? 'animate-glitch' : ''}`}>
          <span className="block text-steakhouse-cream neon-text">
            RETRO 1982
          </span>
          <span className="block text-steakhouse-blue neon-text">
            BIRTHHOUSE
          </span>
          <span className="block text-steakhouse-pink neon-text">
            EXTRADAGANCA
          </span>
        </h1>
        <p className={`text-steakhouse-pink text-xl md:text-2xl mb-8 font-body ${glitchText ? 'animate-glitch' : ''} filter drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]`}>
          {slogans[currentSlogan]}
        </p>
        <div className="space-y-4">
          <a
            href="#rsvp"
            className="inline-block bg-steakhouse-maroon text-steakhouse-cream border-2 border-steakhouse-cream px-8 py-3 rounded-lg text-lg font-bold hover:bg-steakhouse-cream hover:text-steakhouse-maroon transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(226,232,240,0.3)] hover:shadow-[0_0_25px_rgba(226,232,240,0.5)]"
          >
            RSVP NOW
          </a>
          <p className="text-steakhouse-cream text-sm font-body animate-pulse filter drop-shadow-[0_0_8px_rgba(226,232,240,0.6)]">
            A NIGHT OF SIZZLING STEAKS & RETRO VIBES
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-steakhouse-wood to-transparent"></div>
      
      {/* Corner decorations with enhanced glow */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-steakhouse-cream opacity-50 shadow-[0_0_15px_rgba(226,232,240,0.3)]"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-steakhouse-cream opacity-50 shadow-[0_0_15px_rgba(226,232,240,0.3)]"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-steakhouse-cream opacity-50 shadow-[0_0_15px_rgba(226,232,240,0.3)]"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-steakhouse-cream opacity-50 shadow-[0_0_15px_rgba(226,232,240,0.3)]"></div>
    </div>
  );
};

export default Hero;