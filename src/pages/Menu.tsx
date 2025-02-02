import { useState } from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import MenuCard from "@/components/MenuCard";
import { menuItems, MenuItem } from "@/data/menu";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(menuItems.map(item => item.category))];

  const filteredItems = selectedCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-steakhouse-wood text-steakhouse-cream">
      <Navigation />
      <div className="container mx-auto px-4 py-16 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-neonFlicker flex items-center justify-center gap-2">
            <Utensils className="text-steakhouse-pink" />
            Our Menu
            <Utensils className="text-steakhouse-pink" />
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-steakhouse-pink text-steakhouse-wood border-steakhouse-pink"
                    : "border-steakhouse-cream/20 hover:border-steakhouse-pink"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;