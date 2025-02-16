
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const SpotifyModal = () => {
  const [isOpen, setIsOpen] = useState(true);

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
              BIRTHHOUSE EXTRADAGANCA was a themed party and experimental playlist experience that took place in February 2025—a fully immersive soundscape designed to transport guests into a hip steakhouse in 1982, followed by a wild house party, and ending with a legendary, dreamlike after-party. The night unfolded through three distinct soundtracks, each capturing a unique phase of the evening&apos;s journey.
            </p>
            <p className="text-lg leading-relaxed">
              Now, you can experience the full three-part BIRTHHOUSE EXTRADAGANCA soundtrack—recreated and preserved on Spotify.
            </p>
          </div>
          <div className="w-full aspect-[16/9] max-w-full mt-6">
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/playlist/09CBESu1K5A0wPgARaoc94?utm_source=generator"
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
