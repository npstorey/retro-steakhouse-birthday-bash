import { useEffect, useState } from "react";

const Hero = () => {
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-steakhouse-wood overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${glitchText ? 'animate-glitch' : ''}`}>
          <span className="block text-steakhouse-cream animate-neonFlicker">
            RETRO 1982
          </span>
          <span className="block text-steakhouse-blue animate-neonFlicker">
            STEAKHOUSE
          </span>
        </h1>
        <p className="text-steakhouse-pink text-xl md:text-2xl mb-8 animate-neonFlicker">
          BIRTHDAY EXTRAVAGANZA
        </p>
        <a
          href="#rsvp"
          className="inline-block bg-steakhouse-maroon text-steakhouse-cream border-2 border-steakhouse-cream px-8 py-3 rounded-lg text-lg font-bold hover:bg-steakhouse-cream hover:text-steakhouse-maroon transition-all duration-300 hover:scale-105"
        >
          RSVP NOW
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-steakhouse-wood to-transparent"></div>
    </div>
  );
};

export default Hero;