import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Facebook, Instagram, Mail, MapPin, Clock, Star, Heart, Leaf, ArrowRight, Check, ShoppingBag, IceCream, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nutri-beige to-white">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('/Nutriscoop-Web/images/nutriscoop background.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutri-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-nutri-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-nutri-green/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-nutri-orange/15 rounded-full blur-xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 text-nutri-orange/10 transform rotate-12">
          <IceCream className="w-full h-full" />
        </div>
        <div className="absolute -bottom-2 left-1/4 w-32 h-32 text-nutri-green/10 transform -rotate-12">
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 -left-2 w-16 h-16 text-nutri-orange/10 transform rotate-45">
          <Sparkles className="w-full h-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-0">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in relative">
              {/* Top Badge */}
              <div className="inline-block mb-8 bg-white/80 backdrop-blur-sm rounded-full py-2 px-6 shadow-md transform hover:scale-105 transition-transform">
                <span className="text-nutri-green font-medium flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-nutri-orange" />
                  <span>100% Plant-Based Goodness</span>
                </span>
              </div>
              
              {/* Main Headline with Gradient Effect */}
              <div className="relative mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  <span className="text-nutri-green">NutriScoop</span> <span className="text-nutri-orange">•</span> <span className="bg-gradient-to-r from-nutri-green to-nutri-orange bg-clip-text text-transparent">Vegan Ice Cream</span>
                </h1>
                
                {/* Decorative Lines */}
                <div className="absolute -left-4 top-1/2 w-6 h-1 bg-nutri-orange rounded-full hidden md:block"></div>
                <div className="absolute -right-4 top-1/2 w-6 h-1 bg-nutri-orange rounded-full hidden md:block"></div>
              </div>
              
              {/* Subtitle with enhanced styling */}
              <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
                Experience the perfect harmony of <span className="italic text-nutri-green font-medium">taste</span> and <span className="italic text-nutri-orange font-medium">wellness</span> with our plant-based 
                ice cream crafted with love and natural ingredients.
              </p>
              
              {/* CTA Buttons with enhanced styling */}
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="bg-nutri-orange hover:bg-nutri-orange/90 px-8 py-6 text-lg group shadow-lg hover:shadow-xl transition-all rounded-full relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Try Our Flavors <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-nutri-orange to-nutri-orange/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-nutri-green text-nutri-green hover:bg-nutri-green/10 px-8 py-6 text-lg rounded-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              
              {/* Subtle Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
                <div className="w-8 h-12 border-2 border-nutri-green/30 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-3 bg-nutri-green/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-nutri-green/5 opacity-80"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-nutri-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-nutri-green/5 rounded-full blur-3xl"></div>
        
        <div className="container relative max-w-5xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="bg-nutri-orange/10 text-nutri-orange font-semibold px-4 py-1 rounded-full text-sm mb-4 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-nutri-green mb-6">
              The NutriScoop <span className="text-nutri-orange">Difference</span>
            </h2>
            <p className="text-gray-600 text-lg">Discover what makes our plant-based ice cream the perfect guilt-free indulgence that keeps our customers coming back for more.</p>
            <div className="w-24 h-1 bg-nutri-orange mx-auto mt-8 rounded-full"></div>
          </div>
          
          {/* Benefits Cards - Simple Clean Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nutri-green/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="bg-nutri-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-8 w-8 text-nutri-green" />
                </div>
                
                <h3 className="text-2xl font-bold text-nutri-green mb-4">100% Plant-Based</h3>
                <p className="text-gray-600 mb-6">Made with wholesome, natural ingredients that are good for you and the planet.</p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-nutri-orange/10 p-1">
                      <Check className="h-4 w-4 text-nutri-orange" />
                    </div>
                    <span className="text-gray-700">Dairy-free alternative</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-nutri-orange/10 p-1">
                      <Check className="h-4 w-4 text-nutri-orange" />
                    </div>
                    <span className="text-gray-700">Environmentally friendly</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nutri-green/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="bg-nutri-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-nutri-green" />
                </div>
                
                <h3 className="text-2xl font-bold text-nutri-green mb-4">Healthier Choice</h3>
                <p className="text-gray-600 mb-6">Lower in calories and sugar, packed with nutrients, and free from artificial additives.</p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-nutri-orange/10 p-1">
                      <Check className="h-4 w-4 text-nutri-orange" />
                    </div>
                    <span className="text-gray-700">Naturally sweetened</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-nutri-orange/10 p-1">
                      <Check className="h-4 w-4 text-nutri-orange" />
                    </div>
                    <span className="text-gray-700">Nutrient-rich ingredients</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nutri-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="bg-nutri-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-nutri-orange" />
                </div>
                
                <h3 className="text-2xl font-bold text-nutri-green mb-4">Made with Love</h3>
                <p className="text-gray-600 mb-6">Every scoop is crafted with passion and care, ensuring a delightful experience with each bite.</p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-nutri-orange/10 p-1">
                      <Check className="h-4 w-4 text-nutri-orange" />
                    </div>
                    <span className="text-gray-700">Handcrafted recipes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-nutri-orange/10 p-1">
                      <Check className="h-4 w-4 text-nutri-orange" />
                    </div>
                    <span className="text-gray-700">Perfected with passion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-nutri-beige/20 via-white to-nutri-green/5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -left-48 top-48 w-96 h-96 bg-nutri-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-48 bottom-48 w-96 h-96 bg-nutri-green/5 rounded-full blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-4 md:left-20 w-16 h-16 text-nutri-orange/20 transform rotate-12">
          <IceCream className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-4 md:right-20 w-16 h-16 text-nutri-green/20 transform -rotate-12">
          <IceCream className="w-full h-full" />
        </div>
        
        <div className="container relative max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="flex items-center justify-center gap-2 bg-nutri-green/10 text-nutri-green font-semibold px-4 py-1 rounded-full text-sm mb-4 mx-auto w-fit">
              <IceCream className="h-4 w-4" /> Our Flavors
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-nutri-green mb-6">
              Pick Your <span className="text-nutri-orange">Favorite</span> Scoop
            </h2>
            <p className="text-gray-600 text-lg">Explore our unique, nutritious flavors that combine great taste with the goodness of vegetables.</p>
            <div className="w-24 h-1 bg-nutri-orange mx-auto mt-8 rounded-full"></div>
          </div>
          
          {/* Shop Display */}
          <div className="relative mb-16">
            {/* Display Counter Top Border */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-nutri-green/10 rounded-t-3xl"></div>
            
            {/* Ice Cream Display Container */}
            <div className="pt-6 pb-8 px-6 md:px-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
              {/* Product Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {/* Carrot Flavor */}
                <div className="group relative flex flex-col items-center">
                  <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-8 border-nutri-orange/10 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center hover:border-nutri-orange/30">
                    {/* Background color with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 group-hover:from-orange-100 group-hover:to-orange-50 transition-colors duration-500"></div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-tr-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Product Image */}
                    <div className="relative p-4 w-full h-full flex items-center justify-center">
                      <div className="aspect-square rounded-xl overflow-hidden">
                        <img
                          src={`${import.meta.env.BASE_URL}images/carrot.png`}
                          alt="Carrot"
                          className="h-full w-full object-contain transition-all duration-500 drop-shadow-md group-hover:scale-110 group-hover:rotate-2"
                        />
                      </div>
                    </div>
                    {/* Scoop Handle with enhanced effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-nutri-beige/80 to-nutri-beige/60 rounded-b-full group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Hover label */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full text-nutri-orange font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Popular Choice
                    </div>
                  </div>
                  
                  {/* Product Info with enhanced styling */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300">
                      Carrot Flavor
                    </h3>
                    <p className="text-gray-600 my-3 text-sm">
                      A bitter-sweet flavor beneficial for regulating sugar levels.
                    </p>
                    <Link to="/products/carrot">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-nutri-orange border-2 text-nutri-orange hover:bg-nutri-orange hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Try This Flavor
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Corn Flavor */}
                <div className="group relative flex flex-col items-center">
                  <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-8 border-nutri-green/10 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center hover:border-nutri-green/30">
                    {/* Background color with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 group-hover:from-yellow-100 group-hover:to-yellow-50 transition-colors duration-500"></div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-tr-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Product Image */}
                    <div className="relative p-4 w-full h-full flex items-center justify-center">
                      <div className="aspect-square rounded-xl overflow-hidden">
                        <img
                          src={`${import.meta.env.BASE_URL}images/corn.png`}
                          alt="Corn"
                          className="h-full w-full object-contain transition-all duration-500 drop-shadow-md group-hover:scale-110 group-hover:rotate-2"
                        />
                      </div>
                    </div>
                    {/* Scoop Handle with enhanced effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-nutri-beige/80 to-nutri-beige/60 rounded-b-full group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Hover label */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full text-nutri-green font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      New Flavor
                    </div>
                  </div>
                  
                  {/* Product Info with enhanced styling */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300">
                      Corn Flavor
                    </h3>
                    <p className="text-gray-600 my-3 text-sm">
                      A milky sweet flavor rich in vitamins and antioxidants.
                    </p>
                    <Link to="/products/corn">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-nutri-orange border-2 text-nutri-orange hover:bg-nutri-orange hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Try This Flavor
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Cucumber Flavor */}
                <div className="group relative flex flex-col items-center">
                  <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-8 border-nutri-green/10 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center hover:border-nutri-green/30">
                    {/* Background color with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-50 group-hover:from-green-100 group-hover:to-green-50 transition-colors duration-500"></div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-tr-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Product Image */}
                    <div className="relative p-4 w-full h-full flex items-center justify-center">
                      <div className="aspect-square rounded-xl overflow-hidden">
                        <img
                          src={`${import.meta.env.BASE_URL}images/cucumber.png`}
                          alt="Cucumber"
                          className="h-full w-full object-contain transition-all duration-500 drop-shadow-md group-hover:scale-110 group-hover:rotate-2"
                        />
                      </div>
                    </div>
                    {/* Scoop Handle with enhanced effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-nutri-beige/80 to-nutri-beige/60 rounded-b-full group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Hover label */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full text-nutri-green font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Refreshing
                    </div>
                  </div>
                  
                  {/* Product Info with enhanced styling */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300">
                      Cucumber Flavor
                    </h3>
                    <p className="text-gray-600 my-3 text-sm">
                      A mild lightly sweet flavor high in water content.
                    </p>
                    <Link to="/products/cucumber">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-nutri-orange border-2 text-nutri-orange hover:bg-nutri-orange hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Try This Flavor
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Sweet Potato Flavor */}
                <div className="group relative flex flex-col items-center">
                  <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-8 border-nutri-orange/10 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center hover:border-nutri-orange/30">
                    {/* Background color with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 group-hover:from-amber-100 group-hover:to-amber-50 transition-colors duration-500"></div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-tr-full transform group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Product Image */}
                    <div className="relative p-4 w-full h-full flex items-center justify-center">
                      <div className="aspect-square rounded-xl overflow-hidden">
                        <img
                          src={`${import.meta.env.BASE_URL}images/sweet_potato.png`}
                          alt="Sweet Potato"
                          className="h-full w-full object-contain transition-all duration-500 drop-shadow-md group-hover:scale-110 group-hover:rotate-2"
                        />
                      </div>
                    </div>
                    {/* Scoop Handle with enhanced effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-nutri-beige/80 to-nutri-beige/60 rounded-b-full group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Hover label */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full text-nutri-orange font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Best Seller
                    </div>
                  </div>
                  
                  {/* Product Info with enhanced styling */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300">
                      Sweet Potato Flavor
                    </h3>
                    <p className="text-gray-600 my-3 text-sm">
                      A naturally sweet flavor packed with antioxidants.
                    </p>
                    <Link to="/products/sweet-potato">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-nutri-orange border-2 text-nutri-orange hover:bg-nutri-orange hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Try This Flavor
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Counter Bottom Border */}
              <div className="mt-8 h-2 bg-nutri-green/10 rounded-full mx-auto w-3/4"></div>
            </div>
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <Link to="/products">
              <Button className="bg-nutri-green hover:bg-nutri-green/90 px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-full">
                Explore All Flavors <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-nutri-green/5 to-white"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-nutri-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-nutri-green/5 rounded-full blur-3xl"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="bg-nutri-orange/10 text-nutri-orange font-semibold px-4 py-1 rounded-full text-sm mb-4 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl font-bold text-nutri-green mb-6">
              Visit Our <span className="text-nutri-orange">Store</span>
            </h2>
            <p className="text-gray-600 text-lg">Come experience our delicious plant-based ice cream in person or reach out to us online.</p>
            <div className="w-24 h-1 bg-nutri-orange mx-auto mt-8 rounded-full"></div>
          </div>
          
          {/* Contact Card */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-nutri-green to-nutri-orange opacity-20 rounded-t-3xl"></div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Map Section */}
              <div className="relative h-96 md:h-auto overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.787118499752!2d120.97961701531908!3d14.670542789753986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b45989f3356f%3A0xdcfbd8dec676ebac!2sKaruhatan%20Rd%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1622152987654!5m2!1sen!2sph" 
                  className="absolute inset-0 w-full h-full" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
                
                {/* Floating Store Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <h3 className="text-nutri-green font-bold text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-nutri-orange" />
                    NutriScoop Store
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">MXQG+RMR, Karuhatan Rd, Valenzuela, 1441 Metro Manila</p>
                </div>
              </div>
              
              {/* Contact Info Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-nutri-green text-2xl mb-8">Connect With Us</h3>
                
                <div className="space-y-8">
                  {/* Contact Items */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-nutri-green/10 p-3 rounded-full group-hover:bg-nutri-green/20 transition-colors">
                      <Mail className="text-nutri-green h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-1">Email Us</p>
                      <a 
                        href="mailto:nutriscoop6@gmail.com" 
                        className="text-nutri-orange hover:text-nutri-green transition-colors"
                      >
                        nutriscoop6@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="bg-nutri-green/10 p-3 rounded-full group-hover:bg-nutri-green/20 transition-colors">
                      <Clock className="text-nutri-green h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-1">Store Hours</p>
                      <p className="text-gray-600">Monday - Sunday | 10 AM to 8 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-nutri-green/10 p-3 rounded-full">
                      <Heart className="text-nutri-green h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-1">Follow Us</p>
                      <div className="flex gap-4 mt-3">
                        <a
                          href="https://facebook.com/NutriScoopPh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-nutri-orange/10 p-2 rounded-full text-nutri-orange hover:bg-nutri-orange hover:text-white transition-all duration-300"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a
                          href="https://instagram.com/NutriScoop.Ph"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-nutri-orange/10 p-2 rounded-full text-nutri-orange hover:bg-nutri-orange hover:text-white transition-all duration-300"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call-to-Action Button */}
                <div className="mt-10">
                  <Button className="w-full bg-nutri-green hover:bg-nutri-green/90 py-6">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-nutri-green"></div>
        
        {/* Straight Line Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/30"></div>
        
        <div className="container relative pt-24 pb-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white rounded-full p-2">
                  <img 
                    src="/Nutriscoop-Web/images/nutriscoop_logo.png"
                    alt="NutriScoop"
                    className="h-12 w-auto"
                  />
                </div>
                <span className="font-bold text-2xl text-white">NutriScoop</span>
              </div>
              <p className="text-nutri-green-100 mb-4 max-w-xs">
                Delicious plant-based ice cream crafted with natural ingredients for a healthier, tastier alternative.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/NutriScoopPh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/NutriScoop.Ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
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

export default Index;
