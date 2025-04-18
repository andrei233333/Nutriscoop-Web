
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
}

export const ProductCard = ({ title, description }: ProductCardProps) => {
  const productId = title.toLowerCase().split(" ")[0];

  return (
    <Card className="bg-white/90 backdrop-blur hover:shadow-lg transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="text-nutri-green group-hover:text-nutri-orange transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <Link to={`/products/${productId}`}>
          <Button 
            variant="ghost" 
            className="text-nutri-orange hover:text-white hover:bg-nutri-orange group-hover:translate-x-2 transition-all duration-300"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
