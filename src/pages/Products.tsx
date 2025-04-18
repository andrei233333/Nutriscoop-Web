import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import { ArrowRight, IceCream, Leaf, MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nutri-beige via-white to-nutri-beige/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutri-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-nutri-green/10 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-gradient-to-r from-nutri-green/10 to-nutri-orange/10 px-4 py-1 rounded-full text-nutri-green text-sm font-medium mb-4">
              Plant-Based Goodness
            </span>
            <h1 className="text-5xl font-bold text-nutri-green mb-6">
              Our <span className="text-nutri-orange">Flavors</span>
        </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our range of delicious, nutritious ice cream flavors crafted from vegetables
            </p>
            <div className="w-16 h-1 bg-nutri-orange mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Products Display */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/products/${product.id}`}
                  className="block group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className={`rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white transition-all duration-300 h-full flex flex-col ${
                    hoveredProduct === product.id ? 'shadow-xl transform -translate-y-2 border-nutri-green/20' : ''
                  }`}>
                    {/* Product Image With Fancy Border */}
                    <div className="relative overflow-hidden">
                      {/* Background color based on flavor */}
                      <div className={`absolute inset-0 ${
                        product.id === "carrot" ? "bg-gradient-to-br from-orange-50 to-orange-100" :
                        product.id === "corn" ? "bg-gradient-to-br from-yellow-50 to-yellow-100" :
                        product.id === "cucumber" ? "bg-gradient-to-br from-green-50 to-green-100" :
                        "bg-gradient-to-br from-amber-50 to-amber-100"
                      }`}></div>
                      
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full"></div>
                      
                      {/* Product Image */}
                      <div className="p-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm p-2">
                          <img
                            src={`/images/${product.id.replace('-', '_')}.png`}
                    alt={product.title}
                            className={`h-full w-full object-contain transition-transform duration-500 drop-shadow-md ${
                              hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Fancy Divider */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-nutri-green/20 to-transparent"></div>
                    
                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-nutri-green mb-3">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-5 flex-grow">
                        {product.description}
                      </p>
                      
                      {/* Benefits Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.benefits.slice(0, 2).map((benefit, index) => (
                          <span 
                            key={index}
                            className="flex items-center text-xs bg-nutri-green/10 text-nutri-green px-3 py-1 rounded-full"
                          >
                            <Leaf className="h-3 w-3 mr-1 text-nutri-orange" />
                            {benefit.split(' ').slice(0, 3).join(' ')}...
                          </span>
                        ))}
                      </div>
                      
                      {/* Button */}
                      <Button 
                        className="w-full bg-nutri-green hover:bg-nutri-orange text-white group transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Our Store Section */}
      <section className="py-16 bg-gradient-to-br from-nutri-green/5 to-nutri-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="p-8 md:col-span-3 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-nutri-green mb-4">Visit Our Store</h3>
                <p className="text-gray-600 mb-6">
                  Can't decide which flavor to try? Visit our store for a taste test and experience the full range of our delicious plant-based ice cream flavors in person.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-nutri-green/10 p-2 shrink-0">
                      <MapPin className="h-5 w-5 text-nutri-green" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        MXQG+RMR, Karuhatan Rd, Valenzuela, 1441 Metro Manila
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-nutri-green/10 p-2 shrink-0">
                      <Clock className="h-5 w-5 text-nutri-green" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Monday - Sunday | 10 AM to 8 PM
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="bg-nutri-orange hover:bg-nutri-orange/90 text-white">
                    Get Directions
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2 bg-nutri-green p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <img src="/images/nutriscoop_logo.png" alt="NutriScoop" className="h-24 w-auto mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">NutriScoop</h4>
                  <p className="text-white/80">
                    Where Health Meets Pleasure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-nutri-green text-white relative overflow-hidden mt-8">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/nutriscoop\ background.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutri-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-nutri-green-dark/20 rounded-full blur-3xl"></div>
        
        <div className="container py-16 relative">
          {/* Logo and Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Tagline */}
            <div>
              <div className="flex items-center mb-6">
                <img src="/images/nutriscoop_logo.png" alt="NutriScoop" className="h-16 w-auto mr-3" />
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
    </div>
  );
};

export default Products;
