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
      <div className="text-6xl md:text-8xl font-bold text-steakhouse-blue animate-neonFlicker">
        WELCOME TO
        <br />
        RETRO '82
      </div>
    </div>
  );
};

export default NeonIntro;