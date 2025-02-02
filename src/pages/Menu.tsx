import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Flame, Beef, Droplets } from "lucide-react";
import useSound from 'use-sound';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "The Boombox Ribeye",
    description: "A chart-topping 12oz ribeye that'll make your taste buds dance. Marbled to perfection like a disco ball's reflection.",
    price: "$32.82",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Electric Slide Sirloin",
    description: "8oz of pure rhythm & beef. This lean cut moves across your palate with the smoothness of your favorite 80's dance.",
    price: "$28.82",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Walkman Wellington",
    description: "Our signature beef Wellington that's wrapped tighter than your cassette tape. A hit single of flavors.",
    price: "$45.82",
    image: "/placeholder.svg"
  }
];

type Doneness = 'rare' | 'medium-rare' | 'medium' | 'medium-well' | 'well-done';
type Seasoning = 'classic' | 'cajun' | 'garlic-herb';
type Sauce = 'none' | 'mushroom' | 'peppercorn' | 'béarnaise';

const Menu = () => {
  const { toast } = useToast();
  const [selectedDoneness, setSelectedDoneness] = useState<Doneness>('medium-rare');
  const [selectedSeasoning, setSelectedSeasoning] = useState<Seasoning>('classic');
  const [selectedSauce, setSelectedSauce] = useState<Sauce>('none');
  
  // We'll use the placeholder sound for now - in production, replace with actual sizzle sound
  const [playSizzle] = useSound('/path-to-sizzle-sound.mp3', { volume: 0.5 });

  const getDonenessBgColor = (doneness: Doneness) => {
    const colors = {
      'rare': 'bg-red-300',
      'medium-rare': 'bg-red-400',
      'medium': 'bg-orange-400',
      'medium-well': 'bg-orange-500',
      'well-done': 'bg-orange-600'
    };
    return colors[doneness];
  };

  const handleCustomization = () => {
    toast({
      title: "Steak Customized! 🥩",
      description: `Your steak will be cooked ${selectedDoneness} with ${selectedSeasoning} seasoning${selectedSauce !== 'none' ? ` and ${selectedSauce} sauce` : ''}.`,
    });
  };

  return (
    <div className="min-h-screen bg-steakhouse-wood p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-12 text-steakhouse-cream animate-neonFlicker">
          Sizzling Specials
        </h1>

        {/* Vintage Menu Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((item) => (
            <Card 
              key={item.id}
              className="group relative overflow-hidden bg-black/40 border-steakhouse-blue hover:border-steakhouse-maroon transition-all duration-300"
              onMouseEnter={() => playSizzle()}
            >
              <div className="p-6 space-y-4">
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 border-2 border-steakhouse-blue group-hover:border-steakhouse-maroon transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-steakhouse-maroon animate-neonFlicker">{item.name}</h3>
                <p className="text-steakhouse-cream">{item.description}</p>
                <p className="text-xl font-bold text-steakhouse-blue">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Steak Customizer */}
        <div className="bg-black/40 rounded-lg p-8 border border-steakhouse-blue">
          <h2 className="text-3xl font-bold text-steakhouse-maroon mb-8 text-center animate-neonFlicker">
            Steak Customizer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doneness Selection */}
            <div className="space-y-4">
              <h3 className="text-xl text-steakhouse-cream mb-4 flex items-center gap-2">
                <Flame className="text-steakhouse-maroon" />
                Doneness
              </h3>
              <div className="space-y-2">
                {['rare', 'medium-rare', 'medium', 'medium-well', 'well-done'].map((doneness) => (
                  <Button
                    key={doneness}
                    onClick={() => setSelectedDoneness(doneness as Doneness)}
                    className={`w-full ${selectedDoneness === doneness ? getDonenessBgColor(doneness as Doneness) : 'bg-gray-700'}`}
                  >
                    {doneness}
                  </Button>
                ))}
              </div>
            </div>

            {/* Seasoning Selection */}
            <div className="space-y-4">
              <h3 className="text-xl text-steakhouse-cream mb-4 flex items-center gap-2">
                <Beef className="text-steakhouse-maroon" />
                Seasoning
              </h3>
              <div className="space-y-2">
                {['classic', 'cajun', 'garlic-herb'].map((seasoning) => (
                  <Button
                    key={seasoning}
                    onClick={() => setSelectedSeasoning(seasoning as Seasoning)}
                    className={`w-full ${selectedSeasoning === seasoning ? 'bg-steakhouse-maroon' : 'bg-gray-700'}`}
                  >
                    {seasoning}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sauce Selection */}
            <div className="space-y-4">
              <h3 className="text-xl text-steakhouse-cream mb-4 flex items-center gap-2">
                <Droplets className="text-steakhouse-maroon" />
                Sauce
              </h3>
              <div className="space-y-2">
                {['none', 'mushroom', 'peppercorn', 'béarnaise'].map((sauce) => (
                  <Button
                    key={sauce}
                    onClick={() => setSelectedSauce(sauce as Sauce)}
                    className={`w-full ${selectedSauce === sauce ? 'bg-steakhouse-blue' : 'bg-gray-700'}`}
                  >
                    {sauce}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Button 
            onClick={handleCustomization}
            className="w-full mt-8 bg-steakhouse-maroon hover:bg-steakhouse-blue transition-colors duration-300"
          >
            Customize My Steak
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;