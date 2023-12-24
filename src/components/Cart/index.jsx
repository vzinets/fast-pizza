import React, { useState } from "react";
import css from "./style.module.css"
import { useCart } from "../Context";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import CartForm from "./CartForm";



const Cart = () => {

  const { cart} = useCart()

  const cartCount = cart.length;

  const [open, setOpen] = useState(true)
  const [order, setOrder] = useState(false)

 const cartClose = () => {
    setOpen(!open)
 }

 const cartClick = (e) => {
  e.stopPropagation();
};
  
  return (
    <div className={css.cart_wrapper}>
      <button className={css.cart_button}  onClick={() => cartClose()}> cart
        <span className={css.cart_count}>{cartCount}</span>
      </button>
      <div className={open? css.popup : css.popup + ' ' + css.popup__close} onClick={ () => cartClose()} >
        <div className={css.popup__inner} onClick={cartClick}>
          {cart.length != 0?
           <>
           {!order?
           <CartItems cart = {cart}/>
           :
           <CartForm/>
          }
           </>
           :
           <EmptyCart/>}
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
