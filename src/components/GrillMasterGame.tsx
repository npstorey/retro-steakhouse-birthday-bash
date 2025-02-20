
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Flame, X } from 'lucide-react';
import useSound from 'use-sound';

interface Steak {
  id: number;
  cookingLevel: number; // 0-100
  isFlipped: boolean;
}

const GrillMasterGame = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [steaks, setSteaks] = useState<Steak[]>([]);
  
  // We'll use placeholder sounds for now
  const [playSizzle] = useSound('/path-to-sizzle.mp3', { volume: 0.5 });
  const [playFlip] = useSound('/path-to-flip.mp3', { volume: 0.5 });
  const [playWin] = useSound('/path-to-win.mp3', { volume: 0.5 });

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
    setSteaks([
      { id: 1, cookingLevel: 0, isFlipped: false },
      { id: 2, cookingLevel: 0, isFlipped: false },
      { id: 3, cookingLevel: 0, isFlipped: false },
    ]);
  };

  const flipSteak = (id: number) => {
    if (!gameStarted) return;
    
    playFlip();
    setSteaks(prevSteaks =>
      prevSteaks.map(steak =>
        steak.id === id
          ? { ...steak, isFlipped: !steak.isFlipped }
          : steak
      )
    );
  };

  // Game timer
  useEffect(() => {
    if (!gameStarted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });

      // Cook steaks
      setSteaks(prevSteaks =>
        prevSteaks.map(steak => ({
          ...steak,
          cookingLevel: steak.cookingLevel + (steak.isFlipped ? 1 : 2),
        }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted]);

  // Check steaks doneness
  useEffect(() => {
    steaks.forEach(steak => {
      if (steak.cookingLevel >= 50 && steak.cookingLevel <= 75 && steak.isFlipped) {
        setScore(prev => prev + 1);
        playSizzle();
      }
      if (steak.cookingLevel > 100) {
        toast({
          title: "Steak Burned! 🔥",
          description: "Oh no! This one's a bit too well done...",
        });
        endGame();
      }
    });
  }, [steaks]);

  const endGame = () => {
    setGameStarted(false);
    if (score > 5) {
      playWin();
      toast({
        title: "Grill Master! 👨‍🍳",
        description: `Amazing! You scored ${score} points!`,
      });
    } else {
      toast({
        title: "Game Over! 🎮",
        description: `You scored ${score} points. Keep practicing!`,
      });
    }
  };

  return (
    <Card className="fixed inset-0 m-auto w-96 h-[32rem] bg-steakhouse-wood border-steakhouse-blue p-6 flex flex-col items-center justify-center space-y-4 animate-fade-in z-[100]">
      <Button 
        variant="ghost" 
        className="absolute top-2 right-2 hover:bg-steakhouse-maroon"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>

      <h2 className="text-2xl font-bold text-steakhouse-maroon animate-neonFlicker mb-4">
        Grill Master Challenge
      </h2>

      {!gameStarted ? (
        <Button 
          onClick={startGame}
          className="bg-steakhouse-blue hover:bg-steakhouse-maroon transition-colors"
        >
          Start Game
        </Button>
      ) : (
        <>
          <div className="text-steakhouse-cream mb-4">
            Time: {timeLeft}s | Score: {score}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {steaks.map(steak => (
              <Button
                key={steak.id}
                onClick={() => flipSteak(steak.id)}
                className={`w-24 h-24 relative ${
                  steak.cookingLevel > 75
                    ? 'bg-red-800'
                    : steak.cookingLevel > 50
                    ? 'bg-red-600'
                    : 'bg-red-400'
                } hover:scale-105 transition-all`}
              >
                <Flame
                  className={`absolute ${
                    steak.isFlipped ? 'bottom-2' : 'top-2'
                  } left-1/2 transform -translate-x-1/2 text-orange-500`}
                />
              </Button>
            ))}
          </div>
          
          <p className="text-sm text-steakhouse-cream text-center mt-4">
            Flip steaks when they're medium-rare!<br/>
            Don't let them burn!
          </p>
        </>
      )}
    </Card>
  );
};

export default GrillMasterGame;
