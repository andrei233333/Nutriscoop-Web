import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Building } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, MapPin, Mail, Clock } from "lucide-react";
import Footer from '../components/Footer';

const About = () => {
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nutri-beige to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-nutri-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-nutri-green/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-nutri-green/10 text-nutri-green text-sm font-medium mb-4">Our Journey</span>
            <h1 className="text-5xl font-bold text-nutri-green mb-6">
              About <span className="text-nutri-orange">NutriScoop</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover the story behind our mission to create delicious vegan ice cream that's good for you and the planet.
            </p>
          </div>
        </div>
      </section>
      
      {/* Store Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-nutri-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-nutri-green/5 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-nutri-orange/20 to-nutri-green/20 text-nutri-green text-sm font-medium mb-6 shadow-sm">
              <span className="text-nutri-orange">●</span> Our Store <span className="text-nutri-orange">●</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-nutri-green mb-6">
              Where Plant-Based <span className="text-nutri-orange">Magic</span> Happens
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Visit our welcoming space where every scoop of plant-based goodness is crafted with care and served with a smile.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="relative overflow-hidden md:col-span-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-nutri-green/30 to-nutri-orange/30 opacity-30 mix-blend-overlay"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-r from-nutri-green/30 to-nutri-orange/30 opacity-30 mix-blend-overlay"></div>
                    <img
                      src={`${import.meta.env.BASE_URL || ''}images/staff.png`}
                      alt="NutriScoop Staff"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[url('${import.meta.env.BASE_URL || ''}images/nutriscoop background.jpg')] bg-cover bg-center opacity-5"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white/30 backdrop-blur-sm p-2 rounded-full">
                        <span className="text-xs font-bold tracking-wider">VISIT US</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold leading-tight mb-1 drop-shadow-md">Experience NutriScoop</h3>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col justify-center md:col-span-2 relative overflow-hidden">
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-nutri-green/5 rounded-full blur-2xl"></div>
                  
                  <h3 className="text-2xl font-bold text-nutri-green mb-6 flex items-center">
                    <span className="bg-nutri-orange/10 p-1 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-nutri-orange">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </span>
                    Our Flagship Store
                  </h3>
                  
                  <div className="space-y-4 relative z-10">
                    <p className="text-gray-600">
                      Located in <span className="font-medium">Karuhatan, Valenzuela</span>, our store offers a unique ice cream experience unlike any other. We've created a warm, inviting space where customers can enjoy our plant-based treats.
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-nutri-green/10 p-1.5 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-nutri-green">
                            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                            <path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path>
                            <path d="M12 22v-2"></path>
                            <path d="M20 12h2"></path>
                            <path d="M2 12h2"></path>
                            <path d="M12 2v2"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">Mon - Sun | 10 AM to 8 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 text-center hover:bg-nutri-green/5 transition-colors">
                <p className="text-nutri-green font-medium">Friendly Staff</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 text-center hover:bg-nutri-green/5 transition-colors">
                <p className="text-nutri-green font-medium">Cozy Atmosphere</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 text-center hover:bg-nutri-green/5 transition-colors">
                <p className="text-nutri-green font-medium">Fresh Ingredients</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 text-center hover:bg-nutri-green/5 transition-colors">
                <p className="text-nutri-green font-medium">Eco-Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-16 relative">
        <div className="container">
          <Card className="overflow-hidden border-none bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl mb-16">
            <div className="grid md:grid-cols-5">
              <div className="bg-nutri-green md:col-span-2 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Company Origins</h2>
                  <p className="text-white/80">How NutriVal was founded with a vision for healthier treats</p>
                </div>
              </div>
              
              <div className="md:col-span-3 p-10">
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    <span className="text-nutri-green font-bold">NutriVal Company</span> was established on February 7, 2025, a partnership formed by ten
                    young adults who desire to be successful entrepreneurs. The "Nutri" was derived from a word
                    'Nutrition" which signifies the consumption and utilization of nutritious foods to support growth,
                    energy production, and overall well being. Meanwhile "Val" comes to "Valenzuela city", the
                    hometown of young entrepreneurs.
                  </p>
                  <p>
                    We chose this company name because it signifies our commitment in providing nutritious 
                    and locally inspired products for the community.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden border-none bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-10 order-2 md:order-1">
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    The name <span className="text-nutri-orange font-bold">'Nutriscoop'</span> signifies our dedication to plant-based goodness, blending
                    nutrition and indulgence to deliver ice cream that is both healthy and satisfying. The word
                    'Scoop' brings to mind the simple pleasure our treats bring.
                  </p>
                  <p>
                    The fusion of 'Nutri' and 'Scoop' highlights our commitment to sustainability, reflecting our passion for eco-friendly practices and
                    plant-based ingredients. We believe that ice cream can be both delicious and nutritious, offering a guilt-free treat that everyone can enjoy.
                  </p>
                </div>
              </div>
              
              <div className="bg-nutri-orange md:col-span-2 p-8 flex items-center justify-center order-1 md:order-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">NutriScoop Story</h2>
                  <p className="text-white/80">How our ice cream brand came to life</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nutri-green mb-6">Our Purpose</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by a clear mission and vision, we're committed to changing how the world thinks about ice cream.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border-t-4 border-nutri-orange">
              <div className="w-16 h-16 bg-nutri-orange/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-nutri-orange" />
              </div>
              <h2 className="text-2xl font-bold text-nutri-green mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To value customers with an exciting and one of a kind ice cream experience, while
                promoting healthy and nutritious options that benefit our community.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border-t-4 border-nutri-green">
              <div className="w-16 h-16 bg-nutri-green/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-nutri-green" />
              </div>
              <h2 className="text-2xl font-bold text-nutri-green mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the go-to brand for vegan ice cream, offering a variety of flavors that make it easy
                for people to make healthier, more sustainable choices. Our goal is to become one of the
                healthiest and affordable ice creams in the community. We want to bring joy to dessert lovers
                everywhere while making a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
