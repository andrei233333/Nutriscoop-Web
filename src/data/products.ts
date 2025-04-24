export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "carrot",
    title: "Carrot Delight",
    description: "A naturally sweet and creamy ice cream made from fresh carrots, rich in beta-carotene and antioxidants.",
    fullDescription: "A bitter-sweet flavor of our ice cream. This combination is beneficial because the fiber in carrots can help regulate sugar levels.",
    benefits: [
      "Rich in Vitamin A",
      "Boosts immune system",
      "Promotes healthy skin",
      "Supports eye health"
    ],
    image: "/lovable-uploads/b69cb426-7044-4e47-b671-b143a711ae53.png"
  },
  {
    id: "corn",
    title: "Sweet Corn Dream",
    description: "A smooth and creamy ice cream crafted from sweet corn, offering a unique and delightful taste experience.",
    fullDescription: "A milky sweet flavor of our ice cream. Corn is rich in several vitamins, minerals, and antioxidants that help protect against diseases and aid digestion.",
    benefits: [
      "High in fiber",
      "Rich in antioxidants",
      "Supports digestion",
      "Boosts energy"
    ],
    image: "/lovable-uploads/a75b79cf-b1c6-4c63-a7c9-712b7dc21b05.png"
  },
  {
    id: "cucumber",
    title: "Cucumber Refresh",
    description: "A refreshing and light ice cream made from crisp cucumbers, perfect for hot summer days.",
    fullDescription: "A mild lightly sweet flavor of our ice cream. Cucumber is a nutritious fruit with high water content.",
    benefits: [
      "Hydrating",
      "Low in calories",
      "Rich in vitamins",
      "Supports hydration"
    ],
    image: "/lovable-uploads/0028a7e4-8e05-4512-84a0-db6121abfa18.png"
  },
  {
    id: "sweet-potato",
    title: "Sweet Potato Bliss",
    description: "A rich and creamy ice cream made from sweet potatoes, offering a naturally sweet and satisfying treat.",
    fullDescription: "A naturally sweet flavor of our ice cream. Sweet potatoes are a healthy root vegetable packed with antioxidants that protect your cells from damage.",
    benefits: [
      "High in fiber",
      "Rich in vitamins",
      "Supports gut health",
      "Boosts immunity"
    ],
    image: "/lovable-uploads/874888b1-3b5d-4a85-8386-850df3571cda.png"
  }
];

