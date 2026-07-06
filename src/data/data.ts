import type { Product } from "../types/Product";

const products = [
  {
    id: 1,
    title: "Minimalist Leather Backpack",
    price: 89.99,
    description:
      "Sleek, water-resistant leather backpack featuring a 15-inch laptop sleeve and breathable mesh back panels.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
  },
  {
    id: 2,
    title: "Wireless Noise-Canceling Headphones",
    price: 149.5,
    description:
      "Experience high-fidelity audio and advanced active noise cancellation with 40 hours of battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    price: 199.0,
    description:
      "Track your workouts, heart rate, and sleep cycles. Features built-in GPS and a 7-day battery life.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    description:
      "Double-walled, vacuum-insulated bottle that keeps your drinks ice-cold for 24 hours or hot for 12.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    price: 79.99,
    description:
      "Compact 75% layout with tactile brown switches, customizable RGB backlighting, and a solid aluminum frame.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    id: 6,
    title: "Ergonomic Desk Chair",
    price: 259.0,
    description:
      "Premium office chair with adjustable lumbar support, 4D armrests, and high-density foam padding.",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500",
  },
  {
    id: 7,
    title: "Organic Cotton Hoodie",
    price: 45.0,
    description:
      "Ultra-soft heavyweight hoodie made from 100% certified organic cotton. Perfect for casual everyday wear.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500",
  },
  {
    id: 8,
    title: "Portable Bluetooth Speaker",
    price: 59.95,
    description:
      "IPX7 waterproof rated speaker with punchy bass and a compact loop design for music on the go.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
  },
  {
    id: 9,
    title: "Ceramic Pour-Over Coffee Maker",
    price: 32.0,
    description:
      "Artisanal ceramic dripper designed for precise temperature control and optimal coffee extraction.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
  },
  {
    id: 10,
    title: "Ultra-Wide Gaming Monitor",
    price: 349.99,
    description:
      "34-inch curved display with a 144Hz refresh rate and 1ms response time for immersive gameplay.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  },
];
const getProducts = (): Product[] => {
  return products;
};
const getProductById = (id: number): Product | null => {
  return products.find((product) => product.id === id) ?? null;
};
export { getProducts, getProductById };
