import { createContext, useContext, useState } from "react";
import type { Product } from "../types/Product";
import { getProductById } from "../data/data";
import { useNavigate } from "react-router";
interface CartItems {
  id: number;
  quantity: number;
}
interface CartItemWithProducts extends CartItems {
  product: Product | null;
}
interface CartContextType {
  cartItems: CartItems[];
  addToCart: (productId: number) => void;
  getCartItemWithProducts: () => CartItemWithProducts[];
  setUpdateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  getCartTotal: () => number;
  success: () => void;
}
const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItems[]>(() => {
    const saveItems = localStorage.getItem("cartItems");
    return saveItems ? JSON.parse(saveItems) : [];
  });
  const addToCart = (productId: number) => {
    const Existing = cartItems.find((item) => item.id === productId);
    if (Existing) {
      const currentQuantity = Existing.quantity;
      const updateCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updateCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
    } else {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, { id: productId, quantity: 1 }]),
      );
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  };
  const getCartItemWithProducts = () => {
    return cartItems
      .map((item) => {
        return { ...item, product: getProductById(item.id) };
      })
      .filter((item) => item.product);
  };
  const setUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    const updateQuantiy = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item,
    );
    localStorage.setItem("cartItems", JSON.stringify(updateQuantiy));
    setCartItems(updateQuantiy);
  };
  const removeFromCart = (id: number) => {
    const removeFromCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(removeFromCart));
    setCartItems(removeFromCart);
  };
  const getCartTotal = () => {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  };
  const success = () => {
    alert("Order Success!");
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemWithProducts,
        removeFromCart,
        setUpdateQuantity,
        getCartTotal,
        success,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be have within CartProvider");
  }
  return context;
};
