import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider( { children } ) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Load cart from localStorage when app starts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart( product ) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [ ...prev, { ...product, qty: 1 } ];
    });
  }

  function removeFromCart( id ) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={ { cart, addToCart, removeFromCart, clearCart } }>
      {children}
    </CartContext.Provider>
  );
}
