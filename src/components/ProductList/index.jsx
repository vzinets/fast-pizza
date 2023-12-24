import React from "react";
import css from "./style.module.css";
import ProductItem from "../ProductItem";

const ProductList = ({ title = "", data = [] }) => {
  return (
    <section className={css.product}>
      <div className="container">
        <div className={css.product__wrapper}>
          <h2 className={css.product__title}>{title}</h2>
          <button className={css.product__filter}> Фільтр</button>
        </div>
        <ul className={css.product__list}>
          {data.map((item) => (
            <li key={item.id}>
              <ProductItem item = {item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
