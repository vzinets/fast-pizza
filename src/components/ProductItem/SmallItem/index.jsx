import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import { useCart } from "@/src/components/Context/index";

const SmallItem = ({ item, detailHendler }) => {
  const { id, imageUrl, title, description, price, old_price, weight, label, spicy } = item;


    const {addToCart} = useCart();

    const selectHendler = (id, imageUrl, title, price, basement = "Традиційне", diametr = 20) => {

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


  const buttonHendler = (id, imageUrl, title, price, e) => {
    selectHendler(id, imageUrl, title, price)
    e.stopPropagation()

  }


  return (
    <article className={css.item__article} onClick={detailHendler}>
      {label ? <span className={css.item__label}>{label}</span> : <></>}
      <Image
        width={100}
        height={100}
        alt={title}
        src={imageUrl}
        className={css.item__image}
      />
      <div className={css.item__text}>
        <h2 className={css.item__title}>{title}</h2>
        <p className={css.item__desc}>{description}</p>
        <div className={css.item__select}>
          <button className={css.item__button} onClick={ (e) => buttonHendler(id, imageUrl, title, price,e)} >Вибрати</button>
          <div className={css.item__price_wrapper}>
            <span className={css.item__price}>{price} ₴</span>
            <span className={css.item__old_price}>
              {old_price} {old_price ? "₴" : ""}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SmallItem;
