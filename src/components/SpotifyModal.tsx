
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpotifyModalProps {
  onClose: () => void;
}

const SpotifyModal = ({ onClose }: SpotifyModalProps) => {
  const [currentPlaylist, setCurrentPlaylist] = useState("09CBESu1K5A0wPgARaoc94");

  const playlists = {
    main: "09CBESu1K5A0wPgARaoc94",
    afterSteak: "1zRauadB7PV6AobZD8kDgW",
    afterParty: "3M3BBNuhKod7U2o9FEcg5R"
  };

  const changePlaylist = (playlistId: string) => {
    setCurrentPlaylist(playlistId);
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="relative bg-[#1a1a1a] border-8 border-[#333] rounded-xl text-steakhouse-cream max-w-3xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(219,39,119,0.3),inset_0_0_30px_rgba(0,0,0,0.5)] animate-fade-in before:content-[''] before:absolute before:inset-0 before:bg-[url('/lovable-uploads/98cb7c30-ae18-44ee-b1c0-52b56ab6693d.png')] before:opacity-10 before:pointer-events-none">
        <DialogHeader>
          <DialogTitle className="sr-only">Retro Steakhouse Jukebox</DialogTitle>
          <DialogDescription className="sr-only">Select and play music from different playlists representing different parts of the night</DialogDescription>
        </DialogHeader>
        
        <button
          onClick={() => onClose()}
          className="absolute right-4 top-4 p-2 text-steakhouse-cream hover:text-steakhouse-pink transition-colors z-50"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="relative space-y-6 px-6 pt-8 pb-6">
          {/* Metallic strips */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#444] via-[#888] to-[#444] opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-[#444] via-[#888] to-[#444] opacity-80"></div>
          
          <div className="space-y-4 relative">
            <div className="text-center mb-8 relative">
              <div className="absolute inset-0 bg-black/50 blur-md"></div>
              <h2 className="relative font-display text-4xl text-transparent bg-clip-text bg-gradient-to-r from-steakhouse-blue via-steakhouse-pink to-steakhouse-maroon animate-neon-pulse mb-4 drop-shadow-[0_0_10px_rgba(219,39,119,0.5)]">
                SELECT YOUR SONIC JOURNEY
              </h2>
            </div>
            
            <div className="bg-black/60 p-8 rounded-xl backdrop-blur-sm border-2 border-steakhouse-maroon/30 shadow-inner">
              <p className="text-lg leading-relaxed mb-6 text-steakhouse-cream/90">
                BIRTHHOUSE EXTRADAGANCA was a themed party and experimental playlist experience that took place in February 2025—a fully immersive soundscape designed to transport guests into a hip steakhouse in 1982, followed by a wild house party, and ending with a legendary, dreamlike after-party.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-steakhouse-cream/90">
                Now, you can experience the BIRTHHOUSE EXTRADAGANCA soundtrack—and two alternate versions.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-steakhouse-cream/90">
                <strong className="text-steakhouse-pink font-bold">After the Steak</strong> was created by a time-traveling AI, responding to the Original Soundtrack.<br />
                <strong className="text-steakhouse-blue font-bold">Continue the Journey</strong> was the AI's entry into a cosmic contest, expanding the night into an interdimensional dreamscape.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center my-12">
              <Button
                onClick={() => changePlaylist(playlists.main)}
                className="relative bg-steakhouse-maroon hover:bg-steakhouse-pink text-white font-bold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(219,39,119,0.7)] transform hover:scale-105 border-2 border-steakhouse-maroon/30"
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></span>
                <span className="relative">Original Soundtrack</span>
              </Button>
              <Button
                onClick={() => changePlaylist(playlists.afterSteak)}
                className="relative bg-steakhouse-blue hover:bg-steakhouse-pink text-white font-bold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,174,219,0.7)] transform hover:scale-105 border-2 border-steakhouse-blue/30"
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></span>
                <span className="relative">After the Steak</span>
              </Button>
              <Button
                onClick={() => changePlaylist(playlists.afterParty)}
                className="relative bg-steakhouse-pink hover:bg-steakhouse-blue text-white font-bold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transform hover:scale-105 border-2 border-steakhouse-pink/30"
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></span>
                <span className="relative">Continue the Journey</span>
              </Button>
            </div>

            <div className="relative w-full aspect-[16/9] max-w-full mt-6 rounded-xl overflow-hidden border-4 border-[#333] shadow-[0_0_30px_rgba(219,39,119,0.3),inset_0_0_20px_rgba(0,0,0,0.5)]">
              <iframe 
                id="spotifyEmbed"
                style={{ borderRadius: "12px" }} 
                src={`https://open.spotify.com/embed/playlist/${currentPlaylist}?utm_source=generator&theme=0`}
                width="100%" 
                height="380" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full bg-black/90"
              />
            </div>

            <div className="text-center text-steakhouse-cream/60 mt-8 hover:text-steakhouse-pink transition-colors">
              <a 
                href="https://github.com/npstorey/retro-steakhouse-birthday-bash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-steakhouse-pink transition-colors underline decoration-dotted"
              >
                For more info: github.com/npstorey/retro-steakhouse-birthday-bash
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpotifyModal;
