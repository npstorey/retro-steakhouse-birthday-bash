export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "The Boombox Ribeye",
    description: "A perfectly marbled 16oz ribeye, grilled to perfection with our signature neon spice blend.",
    price: "$38",
    category: "steaks",
    image: "/lovable-uploads/613a0697-20da-42ab-aa4d-556354165de9.png"
  },
  {
    id: "2",
    name: "Electric Slide Sirloin",
    description: "10oz top sirloin with a crispy exterior and juicy center, served with arcade butter.",
    price: "$29",
    category: "steaks",
    image: "/lovable-uploads/735408d2-8527-4861-8931-8450b756db39.png"
  },
  {
    id: "3",
    name: "Walkman Wellington",
    description: "Our retro take on the classic - beef tenderloin wrapped in mushroom duxelles and pastry.",
    price: "$45",
    category: "specialties",
    image: "/lovable-uploads/f671a13a-843f-4f5e-b199-bde42a994e57.png"
  },
  {
    id: "4",
    name: "Retro Martini",
    description: "Crisp, cool, and effortlessly suave—this iconic cocktail takes you straight to a sleek 1982 lounge. Gin (or vodka) meets dry vermouth in a polished glass, garnished with a neon olive that glows brighter than a disco ball.",
    price: "$14",
    category: "cocktails",
    image: "/lovable-uploads/3f5a59d3-a3f1-4ac6-87e7-7dc02b49dd70.png"
  },
  {
    id: "5",
    name: "Neon Manhattan",
    description: "A bold mix of whiskey, sweet vermouth, and bitters, this cocktail channels the bright lights and big-city dreams of 1982. Topped with a neon cherry and served with a confident swagger, it's the perfect pour to keep you dancing through the night.",
    price: "$15",
    category: "cocktails",
    image: "/lovable-uploads/26177c9a-7c00-459a-b1b3-e7e7f309a1f0.png"
  },
  {
    id: "6",
    name: "Synthwave Rob Roy",
    description: "This old-world favorite steps into 1982 with a Scotch whiskey backbone, sweet vermouth, and a dash of bitters—perfectly finished with a dazzling neon cherry. A smooth time-traveler of a cocktail, blending the elegance of a classic with the colorful pulse of the early '80s.",
    price: "$16",
    category: "cocktails",
    image: "/lovable-uploads/5221ec46-2c11-4240-9847-1af352b4b1e3.png"
  }
];