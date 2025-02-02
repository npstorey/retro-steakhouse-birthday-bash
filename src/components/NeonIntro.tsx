import { useEffect, useState } from "react";

const NeonIntro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-steakhouse-wood">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold">
          <span className="block text-steakhouse-blue animate-neonFlicker">
            WELCOME TO
          </span>
          <span className="block text-steakhouse-maroon animate-neonFlicker">
            RETRO '82
          </span>
          <span className="block text-steakhouse-pink animate-neonFlicker">
            BIRTHHOUSE
          </span>
        </div>
      </div>
    </div>
  );
};

export default NeonIntro;