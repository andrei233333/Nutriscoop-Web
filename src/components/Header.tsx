import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nutri-green via-nutri-orange to-nutri-green"></div>
      
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-full p-0.5 bg-gradient-to-r from-nutri-green to-nutri-orange">
            <div className="absolute inset-0 bg-gradient-to-r from-nutri-green to-nutri-orange opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-full p-1">
              <img 
                src={`${import.meta.env.BASE_URL || ''}images/nutriscoop_logo.png`}
                alt="NutriScoop Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>
          <span className="font-bold text-nutri-green text-xl group-hover:text-nutri-orange transition-colors duration-300">
            NutriScoop
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-gray-700 hover:text-nutri-orange transition-colors relative py-2 group ${
              isActive('/') ? 'text-nutri-orange' : ''
            }`}
          >
            <span>Home</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-nutri-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
              isActive('/') ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/about" 
            className={`text-gray-700 hover:text-nutri-orange transition-colors relative py-2 group ${
              isActive('/about') ? 'text-nutri-orange' : ''
            }`}
          >
            <span>About</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-nutri-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
              isActive('/about') ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/products" 
            className={`text-gray-700 hover:text-nutri-orange transition-colors relative py-2 group ${
              isActive('/products') ? 'text-nutri-orange' : ''
            }`}
          >
            <span>Products</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-nutri-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
              isActive('/products') ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/contact" 
            className={`text-gray-700 hover:text-nutri-orange transition-colors relative py-2 group ${
              isActive('/contact') ? 'text-nutri-orange' : ''
            }`}
          >
            <span>Contact</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-nutri-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
              isActive('/contact') ? 'scale-x-100' : ''
            }`}></span>
          </Link>
        </nav>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-nutri-green hover:text-nutri-orange hover:bg-transparent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white border-l border-nutri-green/10">
              <div className="flex justify-center mb-8 mt-4">
                <img 
                  src={`${import.meta.env.BASE_URL || ''}images/nutriscoop_logo.png`}
                  alt="NutriScoop Logo" 
                  className="h-16 w-16"
                />
              </div>
              <nav className="flex flex-col gap-4">
                <Link 
                  to="/" 
                  className={`text-lg py-2 border-b border-gray-100 ${
                    isActive('/') ? 'text-nutri-orange' : 'text-gray-700 hover:text-nutri-orange'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-lg py-2 border-b border-gray-100 ${
                    isActive('/about') ? 'text-nutri-orange' : 'text-gray-700 hover:text-nutri-orange'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/products" 
                  className={`text-lg py-2 border-b border-gray-100 ${
                    isActive('/products') ? 'text-nutri-orange' : 'text-gray-700 hover:text-nutri-orange'
                  }`}
                >
                  Products
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-lg py-2 border-b border-gray-100 ${
                    isActive('/contact') ? 'text-nutri-orange' : 'text-gray-700 hover:text-nutri-orange'
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
