import Navigation from "@/components/Navigation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-steakhouse-wood">
      <Navigation />
      <div className="pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-steakhouse-pink animate-neonFlicker">404</h1>
          <p className="text-xl text-steakhouse-cream mb-8">Oops! This page seems to have vanished into the retro void</p>
          <a href="/" className="text-steakhouse-blue hover:text-steakhouse-maroon transition-colors duration-300 underline">
            Return to the Present
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;