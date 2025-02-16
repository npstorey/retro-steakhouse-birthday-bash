
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Sparkles } from "lucide-react";
import Timeline from "@/components/Timeline";
import { useState } from "react";
import SpotifyModal from "@/components/SpotifyModal";

const About = () => {
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  return (
    <div className="min-h-screen bg-steakhouse-wood text-steakhouse-cream">
      <Navigation onShowSpotify={() => setShowSpotifyModal(true)} />
      {showSpotifyModal && <SpotifyModal onClose={() => setShowSpotifyModal(false)} />}
      
      <main className="container mx-auto px-4 py-16 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-neonFlicker flex items-center justify-center gap-2">
            <Sparkles className="text-steakhouse-pink" />
            Our 1982 Story
            <Sparkles className="text-steakhouse-pink" />
          </h1>

          <div className="space-y-8 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-steakhouse-pink"
            >
              It was the summer of 1982—the air was thick with the buzz of arcade machines, new wave music blasted from boomboxes across the street, and blockbuster movies lit up every drive-in theater. Amid this electric atmosphere, Retro '82 Steakhouse was born. Legend has it that our visionary founder, nicknamed 'Sizzlin' Sam,' was struck by inspiration after a midnight viewing of a neon-lit sci-fi flick. He dreamed of blending the timeless appeal of a classic steakhouse with the high-voltage energy of the early '80s—bold flavors, bold fashion, and an even bolder spirit of fun.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="backdrop-blur-sm bg-steakhouse-wood/50 p-6 rounded-lg border border-steakhouse-cream/20"
            >
              Back then, the walls echoed with the clang of spatulas and the thumping bass of disco tracks slowly giving way to synth-pop anthems. Roller-skating servers whipped around with sizzling plates, while gamers in letterman jackets lined up to play the steakhouse's prized pinball machine. As the years rolled on, Retro '82 Steakhouse became a beloved local secret, a place where families celebrated birthdays, old friends caught up, and the sizzling grill never took a day off.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-steakhouse-blue font-medium"
            >
              Over the decades, we've preserved that original spark. The décor still pays homage to the arcades and movie sets of 1982. Our neon signs flicker with the same hypnotic glow, and the aroma of expertly grilled steak still welcomes every guest at the door. This isn't just a restaurant; it's a time capsule—a living tribute to a year when everything felt fresh, vibrant, and full of possibility. So whether you're a first-time visitor or a seasoned traveler from our early days, we invite you to step into Retro '82, step back into 1982, and savor a bite of timeless nostalgia.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-steakhouse-pink">
              Our Journey Through Time
            </h2>
            <Timeline />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
