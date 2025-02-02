import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-steakhouse-wood/90 backdrop-blur-sm border-b border-steakhouse-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-steakhouse-pink animate-pulse" />
              <span className="text-steakhouse-cream font-bold text-xl animate-neonFlicker">
                RETRO '82
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  className={`text-steakhouse-cream hover:text-steakhouse-blue transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium relative group ${
                    location.pathname === item.href ? "text-steakhouse-blue" : ""
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-steakhouse-cream/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-steakhouse-cream hover:text-steakhouse-blue focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-steakhouse-wood/95 backdrop-blur-sm">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.startsWith("#") ? `/${item.href}` : item.href}
              className={`text-steakhouse-cream hover:text-steakhouse-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                location.pathname === item.href ? "text-steakhouse-blue" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;