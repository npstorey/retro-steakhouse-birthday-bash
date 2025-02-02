import { useState, useEffect } from 'react';
import { Beef } from 'lucide-react';

interface FloatingsteakProps {
  onSteakClick: () => void;
}

const FloatingSteak = ({ onSteakClick }: FloatingsteakProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showSteak = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000); // Hide after 5 seconds
    };

    // Show initially after a delay
    const initialTimeout = setTimeout(showSteak, 2000);

    // Set up the interval
    const interval = setInterval(showSteak, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 right-8 cursor-pointer animate-float"
      onClick={onSteakClick}
    >
      <Beef 
        size={48} 
        className="text-steakhouse-maroon hover:text-steakhouse-pink transition-colors duration-300"
      />
    </div>
  );
};

export default FloatingSteak;