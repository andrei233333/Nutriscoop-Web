import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Mail, MapPin, Clock, ExternalLink, Send, Phone, MessageSquare, ShoppingBag, MapPin as MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-nutri-beige to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-12 sm:-top-24 -right-12 sm:-right-24 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-nutri-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 sm:-bottom-32 -left-16 sm:-left-32 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-nutri-green/10 rounded-full blur-3xl"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-6 md:mb-8">
            <span className="inline-block bg-gradient-to-r from-nutri-green/10 to-nutri-orange/10 px-3 py-1 rounded-full text-nutri-green text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4">
              We'd Love To Hear From You
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nutri-green mb-2 sm:mb-3 md:mb-4">
              Get in <span className="text-nutri-orange">Touch</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4 sm:px-0">
              Have questions about our plant-based ice cream or want to provide feedback? We're here to help!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="pb-8 sm:pb-12 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          
            {/* Left Column: Contact Form */}
            <div className="md:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-none rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden h-full">
                <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-nutri-green/5 to-nutri-orange/5 p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-nutri-green flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-nutri-orange" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-8">
                  {formSubmitted ? (
                    <div className="bg-nutri-green/10 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-nutri-green/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <Send className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-nutri-green" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-nutri-green mb-1 sm:mb-2">Thank You!</h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        Your message has been received. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                        <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                          <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700">
                            Your Name
                          </label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            required 
                            className="rounded-lg sm:rounded-xl border-gray-200 focus:border-nutri-green focus:ring-nutri-green/20 text-sm sm:text-base"
                          />
                        </div>
                        <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                          <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="you@example.com" 
                            required 
                            className="rounded-lg sm:rounded-xl border-gray-200 focus:border-nutri-green focus:ring-nutri-green/20 text-sm sm:text-base"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          required 
                          className="rounded-lg sm:rounded-xl border-gray-200 focus:border-nutri-green focus:ring-nutri-green/20 text-sm sm:text-base"
                        />
                      </div>
                      
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700">
                          Your Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry..." 
                          required 
                          className="min-h-[100px] sm:min-h-[120px] md:min-h-[150px] rounded-lg sm:rounded-xl border-gray-200 focus:border-nutri-green focus:ring-nutri-green/20 text-sm sm:text-base"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="bg-nutri-green hover:bg-nutri-orange py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl transition-colors duration-300 w-full sm:w-auto sm:px-6 md:px-8"
                      >
                        Send Message
                        <Send className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column: Contact Information */}
            <div>
              {/* Store Information */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-none rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-4 sm:mb-6">
                <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-nutri-green/5 to-nutri-orange/5 p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-nutri-green flex items-center">
                    <MapPinIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-nutri-orange" />
                    Visit Our Store
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                      <div className="rounded-full bg-nutri-green/10 p-1.5 sm:p-2 md:p-2.5 mt-1 shrink-0">
                        <MapPin className="text-nutri-green h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-nutri-green font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">Address</h3>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">MXQG+RMR, Karuhatan Rd, Valenzuela, 1441 Metro Manila</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                      <div className="rounded-full bg-nutri-green/10 p-1.5 sm:p-2 md:p-2.5 mt-1 shrink-0">
                        <Clock className="text-nutri-green h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-nutri-green font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">Store Hours</h3>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">Monday - Sunday</p>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">10:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                      <div className="rounded-full bg-nutri-green/10 p-1.5 sm:p-2 md:p-2.5 mt-1 shrink-0">
                        <Mail className="text-nutri-green h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-nutri-green font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">Email Us</h3>
                        <a 
                          href="mailto:nutriscoop6@gmail.com" 
                          className="text-gray-600 hover:text-nutri-orange transition-colors text-xs sm:text-sm md:text-base"
                        >
                          nutriscoop6@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                      <div className="rounded-full bg-nutri-green/10 p-1.5 sm:p-2 md:p-2.5 mt-1 shrink-0">
                        <Phone className="text-nutri-green h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-nutri-green font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">Call Us</h3>
                        <a 
                          href="tel:+639123456789" 
                          className="text-gray-600 hover:text-nutri-orange transition-colors text-xs sm:text-sm md:text-base"
                        >
                          +63 912 345 6789
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-none rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-nutri-green/5 to-nutri-orange/5 p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-nutri-green flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-nutri-orange" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.016V14H6v2.016"></path><path d="M16 02.016a11.3 11.3 0 0 1 2.5 1.156 11.494 11.494 0 0 1 6.5 10.312 11.437 11.437 0 0 1-2.765 7.5"></path><path d="M12 02.016c-0.614 0-1.18 0.087-1.734 0.167S9.086 02.38 8.535 02.641a11.991 11.991 0 0 0-1.617 0.734 13.159 13.159 0 0 0-1.5 0.9 14.103 14.103 0 0 0-1.336 1.055 15.732 15.732 0 0 0-1.211 1.235 12.235 12.235 0 0 0-1.031 1.394 14.342 14.342 0 0 0-0.867 1.563 11.512 11.512 0 0 0-0.633 1.68 12.12 12.12 0 0 0-0.4 1.828 13.718 13.718 0 0 0-0.141 1.953 18.908 18.908 0 0 0 0.086 2.102c0.086 0.743 0.227 1.492 0.423 2.234a15.643 15.643 0 0 0 0.75 2.133"></path><path d="m 8 22.016 c -1.089 -0.398 -2.2 -1.008 -3.187 -1.883 A 13.749 13.749 0 0 1 2.961 18.23"></path><path d="M17 22.016a10.497 10.497 0 0 1-5 1.258 10.47 10.47 0 0 1-3.148-0.479"></path><path d="M22 22.016a3.9 3.9 0 0 1-1.324 0.625"></path><path d="M02.461 14H10v-4H02.102a11.253 11.253 0 0 0 0.359 4z"></path><path d="M14 14h7.539a11.253 11.253 0 0 0 0.359-4H14v4z"></path></svg>
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <a
                      href="https://facebook.com/NutriScoopPh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 md:gap-4 group"
                    >
                      <div className="rounded-full bg-blue-500/10 p-1.5 sm:p-2 md:p-2.5 group-hover:bg-blue-500/20 transition-colors shrink-0">
                        <Facebook className="text-blue-600 h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-gray-700 font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base group-hover:text-nutri-green transition-colors">Facebook</h3>
                        <p className="text-gray-500 text-xs sm:text-sm">NutriScoopPh</p>
                      </div>
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    
                    <a
                      href="https://instagram.com/NutriScoop.Ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 md:gap-4 group"
                    >
                      <div className="rounded-full bg-pink-500/10 p-1.5 sm:p-2 md:p-2.5 group-hover:bg-pink-500/20 transition-colors shrink-0">
                        <Instagram className="text-pink-600 h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-gray-700 font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base group-hover:text-nutri-green transition-colors">Instagram</h3>
                        <p className="text-gray-500 text-xs sm:text-sm">@NutriScoop.Ph</p>
                      </div>
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Map Section */}
          <Card className="mt-6 sm:mt-8 md:mt-12 max-w-6xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl border-none rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-nutri-green/5 to-nutri-orange/5 p-3 sm:p-4 md:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-nutri-green flex items-center">
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-nutri-orange" />
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[400px] rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8953246550454!2d120.97916661524111!3d14.676161589753986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b46b00be81a1%3A0x4a2c91c3abc0beef!2sKaruhatan%20Rd%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1650432082897!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          {/* Call to Action */}
          <div className="mt-8 sm:mt-10 md:mt-16 max-w-4xl mx-auto text-center px-4">
            <div className="bg-gradient-to-r from-nutri-green to-nutri-orange p-0.5 rounded-lg sm:rounded-xl md:rounded-2xl">
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-nutri-green mb-2 sm:mb-3">Ready to Try Our Delicious Flavors?</h2>
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                  Visit our store today to experience the perfect harmony of taste and nutrition in every scoop of our plant-based ice cream.
                </p>
                <Link to="/products">
                  <Button className="bg-nutri-green hover:bg-nutri-orange px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl">
                    <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Explore Our Flavors
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
