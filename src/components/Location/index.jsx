import React from "react";
import css from "./style.module.css";

const Location = () => {
  return (
    <div className={css.location}>
      <div className="container">
        <div className={css.location__inner}>
        <p className={css.location__city}>Вінниця</p>
        <p className={css.location__delivery_time}>
          Середній час доставки*: 00:24:19
        </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
