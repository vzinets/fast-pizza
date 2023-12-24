import React, { useState } from "react";
import css from "./style.module.css";
import Image from "next/image";
import { dataFillers } from "@/src/data/dataFillers";
import { useCart } from "@/src/components/Context/index";

const DetailItem = ({ item, detailHendler }) => {
  const [basement, setBasement] = useState("Традиційне");
  const [diametr, setDiametr] = useState(20);

  const setTraditional = () => {
    setBasement("Традиційне");
  };

  const setThick = () => {
    setBasement("Тонке");
  };

  const setPizzaDiametr = (diametr) => {
    setDiametr(diametr);
  };

  const detailClose = () => {
    detailHendler();
  };

  const detailClick = (e) => {
    e.stopPropagation();
  };


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

  const {
    id,
    imageUrl,
    title,
    description,
    price,
    old_price,
    weight,
    label,
    spicy,
  } = item;

  return (
    <article className={css.detail__article} onClick={detailClose}>
      <div className={css.detail__inner} onClick={detailClick}>
        {label ? <span className={css.item__label}>{label}</span> : <></>}
        <button className={css.detail__exit} onClick={detailClose}>
          X
        </button>
        <Image
          width={260}
          height={260}
          alt={title}
          src={imageUrl}
          className={css.detail__image}
        />
        <div className={css.detail__wrapper}>
          <h2
            className={
              spicy
                ? css.detail__title + " " + css.detail__spicy
                : css.detail__title + " " + css.detail__notSpicy
            }
          >
            {title}{" "}
          </h2>

          <div className={css.basement__category}>
            <button
              className={
                basement == "Традиційне"
                  ? css.basement__option + " " + css.basement__active
                  : css.basement__option
              }
              onClick={() => {
                setTraditional();
              }}
            >
              Трациційне
            </button>
            <button
              className={
                basement == "Тонке"
                  ? css.basement__option + " " + css.basement__active
                  : css.basement__option
              }
              onClick={() => {
                setThick();
              }}
            >
              Тонке
            </button>
          </div>

          <div className={css.diametr__category}>
            <button
              className={
                diametr == 20
                  ? css.diametr__option + " " + css.diametr__active
                  : css.diametr__option
              }
              onClick={() => setPizzaDiametr(20)}
            >
              20 см
            </button>
            <button
              className={
                diametr == 28
                  ? css.diametr__option + " " + css.diametr__active
                  : css.diametr__option
              }
              onClick={() => setPizzaDiametr(28)}
            >
              28 см
            </button>
            <button
              className={
                diametr == 33
                  ? css.diametr__option + " " + css.diametr__active
                  : css.diametr__option
              }
              onClick={() => setPizzaDiametr(33)}
            >
              33 см
            </button>
          </div>

          <ul className={css.detail__fillers_list}>
            {dataFillers.map(({ id, name, price, imageUrl }) => (
              <li key={id} className={css.filler__item}>
                <div className={css.image__wrapper}>
                  <Image
                    width={32}
                    height={32}
                    alt={name}
                    src={imageUrl}
                    className={css.filler__image}
                  />
                </div>
                <h3 className={css.filler__title}>{name}</h3>
                <span className={css.filler__price}>{price}₴</span>
              </li>
            ))}
          </ul>

          <div className={css.detail__purchase}>
            <div className={css.purchase__wrapper}>
              <span className={css.purchase__price}>Всього: {price} ₴</span>
              <span className={css.purchse__weight}>{weight} г</span>
            </div>
            <button className={css.purchase__submit} onClick={ () => selectHendler(id, imageUrl, title, price, basement, diametr)}>В корзину</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailItem;
