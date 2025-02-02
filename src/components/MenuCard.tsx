import { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="bg-steakhouse-wood/50 border border-steakhouse-cream/20 rounded-lg p-6 hover:border-steakhouse-pink transition-colors">
      {item.image && (
        <div className="h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-steakhouse-pink">{item.name}</h3>
      <p className="text-steakhouse-cream/80 mb-4">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-steakhouse-blue">{item.price}</span>
        <span className="text-sm text-steakhouse-cream/60 capitalize">{item.category}</span>
      </div>
    </div>
  );
};

export default MenuCard;