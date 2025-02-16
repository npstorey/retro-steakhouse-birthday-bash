
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NeonIntro from "@/components/NeonIntro";
import RetroTicker from "@/components/RetroTicker";
import FloatingSteak from "@/components/FloatingSteak";
import GrillMasterGame from "@/components/GrillMasterGame";
import SpotifyModal from "@/components/SpotifyModal";

const Index = () => {
  const [showGame, setShowGame] = useState(false);
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  return (
    <div className="min-h-screen bg-steakhouse-wood">
      <NeonIntro />
      <Navigation onShowSpotify={() => setShowSpotifyModal(true)} />
      <Hero onShowSpotify={() => setShowSpotifyModal(true)} />
      <RetroTicker />
      <FloatingSteak onSteakClick={() => setShowGame(true)} />
      {showGame && <GrillMasterGame onClose={() => setShowGame(false)} />}
      {showSpotifyModal && <SpotifyModal onClose={() => setShowSpotifyModal(false)} />}
    </div>
  );
};

export default Index;
