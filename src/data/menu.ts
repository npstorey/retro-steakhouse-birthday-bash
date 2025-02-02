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
  }
];