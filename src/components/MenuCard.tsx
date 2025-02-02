import { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const isCocktail = item.category === "cocktails";

  return (
    <div className={`bg-steakhouse-wood/50 border border-steakhouse-cream/20 rounded-lg p-6 hover:border-steakhouse-pink transition-colors ${isCocktail ? 'relative overflow-hidden' : ''}`}>
      {isCocktail && (
        <div className="absolute inset-0 bg-gradient-to-b from-steakhouse-blue/20 to-steakhouse-pink/20 pointer-events-none" />
      )}
      {item.image && (
        <div className="h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
              isCocktail ? 'animate-neon-pulse' : ''
            }`}
          />
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 ${
        isCocktail ? 'font-display text-transparent bg-clip-text bg-gradient-to-r from-steakhouse-blue via-steakhouse-pink to-steakhouse-maroon' : 'text-steakhouse-pink'
      }`}>
        {item.name}
      </h3>
      <p className="text-steakhouse-cream/80 mb-4">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className={`text-xl font-bold ${
          isCocktail ? 'text-steakhouse-pink neon-text' : 'text-steakhouse-blue'
        }`}>
          {item.price}
        </span>
        <span className="text-sm text-steakhouse-cream/60 capitalize">{item.category}</span>
      </div>
    </div>
  );
};

export default MenuCard;