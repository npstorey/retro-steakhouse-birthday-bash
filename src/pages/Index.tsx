import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RsvpForm from "@/components/RsvpForm";
import NeonIntro from "@/components/NeonIntro";
import RetroTicker from "@/components/RetroTicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-steakhouse-wood">
      <NeonIntro />
      <Navigation />
      <Hero />
      <RsvpForm />
      <RetroTicker />
    </div>
  );
};

export default Index;