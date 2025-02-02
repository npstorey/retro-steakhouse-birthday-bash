import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RsvpForm from "@/components/RsvpForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-steakhouse-wood">
      <Navigation />
      <Hero />
      <RsvpForm />
    </div>
  );
};

export default Index;