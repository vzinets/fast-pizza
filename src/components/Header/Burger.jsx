import { useState } from "react";
import css from "./style.module.css";

const Burger = ({ menu, setMenu }) => {
  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <button className={css.header_burger} onClick={menuHandler}>
      <span
        className={
          menu ? `${css.burger_line} ${css.burger_active}` : css.burger_line
        }
      ></span>
      <span
        className={
          menu ? `${css.burger_line} ${css.burger_active}` : css.burger_line
        }
      ></span>
      <span
        className={
          menu ? `${css.burger_line} ${css.burger_active}` : css.burger_line
        }
      ></span>
    </button>
  );
};

export default Burger;
