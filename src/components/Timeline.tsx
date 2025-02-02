import React from "react";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sparkles } from "lucide-react";

interface TimelineEvent {
  year: number;
  title: string;
  popupTitle: string;
  popupText: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1982,
    title: "The Grand Opening",
    popupTitle: "Inaugural Sizzle",
    popupText: "Retro '82 Steakhouse opens its doors! Roller-skating waitstaff, disco-ball lighting, and arcade cabinets make headlines in the local paper.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    year: 1985,
    title: "New Wave Hits the Diner",
    popupTitle: "Synth-Pop Takeover",
    popupText: "As disco fades, synth-pop tunes fill the steakhouse. A brand-new jukebox arrives, stocked with hits from Depeche Mode and Tears for Fears.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    year: 1992,
    title: "The Arcade Expansion",
    popupTitle: "More Games, More Glory",
    popupText: "Retro '82 doubles its arcade space with pinball machines, air hockey, and the brand-new craze: fighting games! High-scores become local legend.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    year: 2000,
    title: "Y2K Buzz",
    popupTitle: "Surviving Y2K",
    popupText: "The world braces for the new millennium, but Retro '82 rolls on—ringing in the 2000s with a revamped neon sign and a special steak sauce named 'Millennium Marinade.'",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
  },
  {
    year: 2012,
    title: "30th Anniversary Bash",
    popupTitle: "Three Decades of Sizzle",
    popupText: "Celebrating 30 years of legendary steaks, Retro '82 hosts a full retro-themed night. Guests dress in '80s gear, and the dance floor rumbles with classic hits.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    year: 2023,
    title: "The Renovation & Revival",
    popupTitle: "Returning to Our Roots",
    popupText: "Retro '82 gets a neon facelift, adding cutting-edge grills while keeping the iconic arcade. We honor the past as we fire up the future!",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
];

const Timeline = () => {
  return (
    <div className="w-full overflow-x-auto py-16">
      <div className="min-w-[1000px] relative">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-steakhouse-maroon/30" />
        
        {/* Timeline events */}
        <div className="flex justify-between items-center relative">
          {timelineEvents.map((event, index) => (
            <HoverCard key={event.year}>
              <HoverCardTrigger asChild>
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Year */}
                  <span className="text-steakhouse-blue mb-4 font-bold">
                    {event.year}
                  </span>
                  
                  {/* Timeline node */}
                  <motion.div
                    className="w-6 h-6 rounded-full bg-steakhouse-maroon 
                             group-hover:animate-neonFlicker relative"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-steakhouse-maroon/50 animate-pulse" />
                  </motion.div>
                  
                  {/* Title */}
                  <span className="text-steakhouse-cream mt-4 text-sm text-center max-w-[120px]">
                    {event.title}
                  </span>
                </motion.div>
              </HoverCardTrigger>
              
              <HoverCardContent 
                className="w-80 bg-steakhouse-wood border-steakhouse-maroon 
                         animate-in zoom-in-95 duration-300"
              >
                <div className="space-y-4">
                  {/* Popup image */}
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  )}
                  
                  {/* Popup content */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-steakhouse-pink flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {event.popupTitle}
                    </h4>
                    <p className="text-sm text-steakhouse-cream">
                      {event.popupText}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;