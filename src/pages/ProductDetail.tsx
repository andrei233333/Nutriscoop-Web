import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import { ArrowLeft, Leaf, Check, MapPin, Mail, Clock, Facebook, Instagram, ArrowUp } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  // Scroll to top when product changes
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setImageLoaded(false);
  }, [id]);
  
  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-nutri-beige to-white">
        <Header />
        <div className="container pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-nutri-green mb-6">Product Not Found</h1>
          <Link to="/products">
            <Button className="bg-nutri-green hover:bg-nutri-orange">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Determine background color based on product
  const getBgColor = () => {
    switch(product.id) {
      case "carrot": return "from-orange-50 to-nutri-beige";
      case "corn": return "from-yellow-50 to-nutri-beige";
      case "cucumber": return "from-green-50 to-nutri-beige";
      case "sweet-potato": return "from-amber-50 to-nutri-beige";
      default: return "from-nutri-beige to-white";
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${getBgColor()}`}>
      <div ref={topRef}></div>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutri-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-nutri-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          {/* Back Navigation */}
          <Link to="/products" className="inline-flex items-center mb-12 group">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-3 group-hover:bg-nutri-green group-hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span className="text-nutri-green font-medium group-hover:text-nutri-orange transition-colors">Back to All Flavors</span>
          </Link>
          
          {/* Product Display */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image Section */}
              <div className={`relative overflow-hidden bg-gradient-to-br ${
                product.id === "carrot" ? "from-orange-50 to-orange-100" :
                product.id === "corn" ? "from-yellow-50 to-yellow-100" :
                product.id === "cucumber" ? "from-green-50 to-green-100" :
                "from-amber-50 to-amber-100"
              }`}>
                {/* Image with loading effect */}
                <div className="p-8 md:p-12 flex items-center justify-center h-full">
                  <div className={`relative aspect-square w-full max-w-md mx-auto transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                      src={`${import.meta.env.BASE_URL}images/${product.id.replace('-', '_')}.png`}
                      alt={product.title}
                      className="h-full w-full object-contain drop-shadow-lg"
                      onLoad={() => setImageLoaded(true)}
                    />
                    {/* Loading placeholder */}
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-nutri-green/20 border-t-nutri-green rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full"></div>
              </div>
              
              {/* Product Info Section */}
              <div className="p-8 md:p-12">
                {/* Product Title */}
                <div className="mb-6">
                  <span className="inline-block bg-nutri-green/10 text-nutri-green text-sm font-medium px-3 py-1 rounded-full mb-3">
                    Plant-Based
                  </span>
                  <h1 className="text-4xl font-bold text-nutri-green">{product.title}</h1>
                </div>
                
                {/* Full Description */}
                <div className="mb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">{product.fullDescription}</p>
                </div>
                
                {/* Price Display with Enhanced Styling */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-nutri-green">Choose Your Size</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-nutri-green/20 hover:border-nutri-green">
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-nutri-green mb-2">Regular</h3>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-nutri-orange">₱54.00</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Perfect for a quick treat</p>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-nutri-orange/20 hover:border-nutri-orange">
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-nutri-orange mb-2">Grande</h3>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-nutri-green">₱64.00</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">For those who want more</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="space-y-4 mt-8">
                  <h2 className="text-xl font-semibold text-nutri-green">Benefits</h2>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg hover:bg-white/80 transition-colors">
                        <Check className="h-5 w-5 text-nutri-orange shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recommendations Section */}
      <section className="py-16 bg-gradient-to-b from-white/80 to-nutri-green/10 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-nutri-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-nutri-green/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-nutri-green/10 to-nutri-orange/10 px-4 py-1 rounded-full text-nutri-green text-sm font-medium mb-3">
              Explore More
            </span>
            <h2 className="text-3xl font-bold text-nutri-green mb-3">You May Also Like</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover our other delicious plant-based flavors crafted with the same care and quality
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {products.filter(p => p.id !== product.id).map((relatedProduct) => (
              <div 
                key={relatedProduct.id} 
                className="cursor-pointer group"
                onClick={() => handleProductClick(relatedProduct.id)}
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative h-full flex flex-col">
                  {/* Product Image */}
                  <div className={`relative p-6 flex-1 bg-gradient-to-br ${
                    relatedProduct.id === "carrot" ? "from-orange-50 to-orange-100" :
                    relatedProduct.id === "corn" ? "from-yellow-50 to-yellow-100" :
                    relatedProduct.id === "cucumber" ? "from-green-50 to-green-100" :
                    "from-amber-50 to-amber-100"
                  }`}>
                    {/* Decorative dot pattern */}
                    <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-nutri-green">
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="3" cy="3" r="2" fill="currentColor" />
                        </pattern>
                        <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
                      </svg>
                    </div>
                    
                    <img
                      src={`${import.meta.env.BASE_URL}images/${relatedProduct.id.replace('-', '_')}.png`}
                      alt={relatedProduct.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4 bg-white relative">
                    {/* Arrow indicator appears on hover */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-nutri-green flex items-center justify-center text-white">
                        <ArrowUp className="h-4 w-4 rotate-45" />
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-nutri-green text-lg mb-1">{relatedProduct.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
