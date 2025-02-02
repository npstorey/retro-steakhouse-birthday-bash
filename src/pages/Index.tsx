import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RsvpForm from "@/components/RsvpForm";
import NeonIntro from "@/components/NeonIntro";
import RetroTicker from "@/components/RetroTicker";
import FloatingSteak from "@/components/FloatingSteak";
import GrillMasterGame from "@/components/GrillMasterGame";

const Index = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="min-h-screen bg-steakhouse-wood">
      <NeonIntro />
      <Navigation />
      <Hero />
      <RsvpForm />
      <RetroTicker />
      <FloatingSteak onSteakClick={() => setShowGame(true)} />
      {showGame && <GrillMasterGame onClose={() => setShowGame(false)} />}
    </div>
  );
};

export default Index;