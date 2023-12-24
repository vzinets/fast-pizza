import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function saveCartToLocalStorage (cart) {
localStorage.setItem("cart", JSON.stringify(cart));

}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart")

    if(cartData) {
     setCart(JSON.parse(cartData))
    } else {
      setCart([])
    }
  }, [])


  useEffect(() => {
    saveCartToLocalStorage(cart)
  }, [cart])
  
  

  const addToCart = (item) => {
    setCart((prevCart) => {
      const double = prevCart.find((cartItem) => cartItem.id === item.id);
      if (double) {
        const updateCart = prevCart.map((cartItem) => {
          if (cartItem.id == item.id) {
            const updateCount =
              cartItem.count <= 9 ? cartItem.count + 1 : cartItem.count;
            return { ...cartItem, count: updateCount };
          }
          return cartItem;
        });

        saveCartToLocalStorage(updateCart)
        return updateCart;
      } else {
        const newCart = [...prevCart, item];
        saveCartToLocalStorage(newCart)
        return newCart;
      }
    });
  };

  const increment = (id) => {
    setCart((prevCart) => {
      const updateCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      saveCartToLocalStorage(updateCart)
      return updateCart;
    });
  };

  const decrement = (id) => {
    setCart((prevCart) => {
      const updateCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      saveCartToLocalStorage(updateCart)
      return updateCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updateCart = prevCart.filter((item) => item.id !== id);
      saveCartToLocalStorage(updateCart)
      return updateCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
