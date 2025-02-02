import { useEffect, useState } from "react";

const trivia = [
  "1982: E.T. the Extra-Terrestrial hits theaters!",
  "Michael Jackson releases Thriller",
  "The first CD player is sold in Japan",
  "Time's Person of the Year: The Computer",
  "The Weather Channel debuts on cable TV",
  "Steakhouses were the place to be in '82!",
  "Average steak dinner cost: $7.99",
];

const RetroTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trivia.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-steakhouse-wood/90 backdrop-blur-sm border-t border-steakhouse-cream/20 py-2 z-40">
      <div className="flex items-center justify-center text-steakhouse-cream overflow-hidden">
        <div className="animate-[slide-in-right_0.5s_ease-out]">
          {trivia[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default RetroTicker;