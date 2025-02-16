
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpotifyModal = () => {
  const [isOpen, setIsOpen] = useState(true);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-[#1A1F2C]/90 border-steakhouse-cream text-steakhouse-cream max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-0 top-0 p-2 text-steakhouse-cream hover:text-steakhouse-pink transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </DialogHeader>
        <div className="space-y-6 px-2">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              BIRTHHOUSE EXTRADAGANCA was a themed party and experimental playlist experience that took place in February 2025—a fully immersive soundscape designed to transport guests into a hip steakhouse in 1982, followed by a wild house party, and ending with a legendary, dreamlike after-party.
            </p>
            <p className="text-lg leading-relaxed">
              Now, you can experience the BIRTHHOUSE EXTRADAGANCA soundtrack—and two alternate versions.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>After the Steak</strong> was created by a time-traveling AI, responding to the Original Soundtrack.<br />
              <strong>Continue the Journey</strong> was the AI's entry into a cosmic contest, expanding the night into an interdimensional dreamscape.
            </p>
            <p className="text-lg leading-relaxed">
              Choose your path below and experience the journey.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => changePlaylist(playlists.main)}
              className="bg-steakhouse-maroon hover:bg-steakhouse-pink text-white font-medium px-6 py-2 rounded-md transition-all duration-300 hover:shadow-neon"
            >
              Original Soundtrack
            </Button>
            <Button
              onClick={() => changePlaylist(playlists.afterSteak)}
              className="bg-steakhouse-blue hover:bg-steakhouse-pink text-white font-medium px-6 py-2 rounded-md transition-all duration-300 hover:shadow-neon"
            >
              After the Steak
            </Button>
            <Button
              onClick={() => changePlaylist(playlists.afterParty)}
              className="bg-steakhouse-pink hover:bg-steakhouse-blue text-white font-medium px-6 py-2 rounded-md transition-all duration-300 hover:shadow-neon"
            >
              Continue the Journey
            </Button>
          </div>
          <div className="w-full aspect-[16/9] max-w-full mt-6">
            <iframe 
              id="spotifyEmbed"
              style={{ borderRadius: "12px" }} 
              src={`https://open.spotify.com/embed/playlist/${currentPlaylist}?utm_source=generator`}
              width="100%" 
              height="380" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpotifyModal;
