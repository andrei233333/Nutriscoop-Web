import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nutri-green text-white relative overflow-hidden mt-16">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL || ''}images/nutriscoop background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutri-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-nutri-green-dark/20 rounded-full blur-3xl"></div>
      
      <div className="container py-16 relative">
        {/* Logo and Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center mb-6">
              <img src={`${import.meta.env.BASE_URL || ''}images/nutriscoop_logo.png`} alt="NutriScoop" className="h-16 w-auto mr-3" />
              <div>
                <h2 className="text-2xl font-bold">NutriScoop</h2>
                <p className="text-nutri-green-100">Vegan Ice Cream</p>
              </div>
            </div>
            <p className="text-nutri-green-100 mb-6">Delicious plant-based ice cream that's good for you and the planet. Made with love and natural ingredients.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-y-2">
              <Link to="/about" className="text-nutri-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                About Us
              </Link>
              <Link to="/products" className="text-nutri-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                Products
              </Link>
              <Link to="/contact" className="text-nutri-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                Contact
              </Link>
              <Link to="/faq" className="text-nutri-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                FAQs
              </Link>
              <Link to="/privacy" className="text-nutri-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-nutri-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                Terms of Service
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Visit Our Store</h3>
            <address className="text-nutri-green-100 not-italic">
              <p className="mb-2 flex items-start gap-2">
                <MapPin className="h-5 w-5 text-nutri-orange shrink-0 mt-0.5" />
                <span>MXQG+RMR, Karuhatan Rd, Valenzuela, 1441 Metro Manila</span>
              </p>
              <p className="mb-2 flex items-start gap-2">
                <Mail className="h-5 w-5 text-nutri-orange shrink-0 mt-0.5" />
                <a href="mailto:nutriscoop6@gmail.com" className="hover:text-white transition-colors">
                  nutriscoop6@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-nutri-orange shrink-0 mt-0.5" />
                <span>Monday - Sunday | 10 AM to 8 PM</span>
              </p>
            </address>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-nutri-green-100">
          <p>&copy; 2025 NutriScoop. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with ❤️ for healthier choices.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 