
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
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
      <DialogContent className="bg-gradient-to-b from-steakhouse-wood to-black border-4 border-steakhouse-maroon rounded-xl text-steakhouse-cream max-w-3xl max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(219,39,119,0.5)] animate-fade-in">
        <button
          onClick={() => onClose()}
          className="absolute right-4 top-4 p-2 text-steakhouse-cream hover:text-steakhouse-pink transition-colors z-50"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="relative space-y-6 px-6 pt-8 pb-6">
          {/* Chrome strips */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-steakhouse-maroon via-steakhouse-blue to-steakhouse-pink opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-steakhouse-pink via-steakhouse-blue to-steakhouse-maroon opacity-80"></div>
          
          <div className="space-y-4 relative">
            <div className="text-center mb-8">
              <h2 className="font-display text-4xl text-transparent bg-clip-text bg-gradient-to-r from-steakhouse-blue via-steakhouse-pink to-steakhouse-maroon animate-neon-pulse mb-4">
                SELECT YOUR SONIC JOURNEY
              </h2>
            </div>
            
            <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-steakhouse-maroon/30">
              <p className="text-lg leading-relaxed mb-4">
                BIRTHHOUSE EXTRADAGANCA was a themed party and experimental playlist experience that took place in February 2025—a fully immersive soundscape designed to transport guests into a hip steakhouse in 1982, followed by a wild house party, and ending with a legendary, dreamlike after-party.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Now, you can experience the BIRTHHOUSE EXTRADAGANCA soundtrack—and two alternate versions.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-steakhouse-pink">After the Steak</strong> was created by a time-traveling AI, responding to the Original Soundtrack.<br />
                <strong className="text-steakhouse-blue">Continue the Journey</strong> was the AI's entry into a cosmic contest, expanding the night into an interdimensional dreamscape.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center my-8">
              <Button
                onClick={() => changePlaylist(playlists.main)}
                className="bg-steakhouse-maroon hover:bg-steakhouse-pink text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] transform hover:scale-105"
              >
                Original Soundtrack
              </Button>
              <Button
                onClick={() => changePlaylist(playlists.afterSteak)}
                className="bg-steakhouse-blue hover:bg-steakhouse-pink text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,174,219,0.5)] transform hover:scale-105"
              >
                After the Steak
              </Button>
              <Button
                onClick={() => changePlaylist(playlists.afterParty)}
                className="bg-steakhouse-pink hover:bg-steakhouse-blue text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:scale-105"
              >
                Continue the Journey
              </Button>
            </div>

            <div className="relative w-full aspect-[16/9] max-w-full mt-6 rounded-lg overflow-hidden border-4 border-steakhouse-maroon/50 shadow-[0_0_30px_rgba(219,39,119,0.3)]">
              <iframe 
                id="spotifyEmbed"
                style={{ borderRadius: "8px" }} 
                src={`https://open.spotify.com/embed/playlist/${currentPlaylist}?utm_source=generator&theme=0`}
                width="100%" 
                height="380" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>

            <div className="text-center text-steakhouse-cream/80 mt-6 hover:text-steakhouse-pink transition-colors">
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
