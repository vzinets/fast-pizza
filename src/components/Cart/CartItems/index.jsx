import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import { useCart } from "@/src/components/Context/index";

const CartItems = ({ cart }) => {
  const { increment, decrement, removeFromCart } = useCart();

  const calcPrice = cart.reduce(
    (sum, item) => item.price * item.count + sum,
    0
  );

  return (
    <>
      <p className={css.popup_title}>Ваше замовлення</p>
      <div className={css.cart__container}>
      <ul className={css.cart__list}>
        {cart.map((item) => (
          <li key={item.id} className={css.cart__item}>
            <Image
              className={css.item__img}
              src={item.imageUrl}
              alt={item.name}
              width={84}
              height={84}
            />
            <div className={css.item__info__wrapper}>
              <button
                className={css.item__delete}
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
              <h2 className={css.item_title}>{item.title}</h2>
              <p className={css.item__detail__info}>
                {item.basement} тісто, {item.diametr} см.
              </p>

              <div className={css.item__price__info}>
                <div className={css.item__count}>
                  <button
                    className={css.item__decrement}
                    disabled={item.count <= 1}
                    onClick={() => decrement(item.id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className={css.item__numbers}>{item.count}</span>
                  <button
                    className={css.item__increment}
                    disabled={item.count >= 10}
                    onClick={() => increment(item.id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <span className={css.item__price}>{item.price}₴</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={css.cart__order}>
        <p className={css.cart__cost}>Усього: {calcPrice} ₴</p>
        <button className={css.submitForm}>Замовити</button>
      </div>
      </div>
    </>
  );
};

export default CartItems;
