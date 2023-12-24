import { useContext } from "react";

// const {addToCart} = useCart();

export const selectHendler = (id, imageUrl, title, price, basement = "Традиційне", diametr = 20) => {

    let newPrice = price + (basement === "Традиційне"? 0: 20) + (diametr === 20? 0: 20);
    let data = {
      id: id,
      imageUrl: imageUrl,
      title: title,
      count: 1,
      basement: basement,
      diametr: diametr,
      price: newPrice
    };

    addToCart(data)
  }