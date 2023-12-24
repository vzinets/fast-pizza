import React from "react";
import css from "./style.module.css";
import { banners } from "@/src/constants/index";
import Image from "next/image";
import Link from "next/link";

const Banners = () => {
  return (
    <section className={css.banners}>
      <div className="container">
        <ul className={css.banners__list}>
          {banners.map(({ id, slug, title, image }) => ( 
            <li className={css.banners__item} key={id}>
              <Link className={css.banners__link} href={slug}>
                <Image className={css.banners__img}
                  src={image}
                  width="300"
                  height="343"
                  alt={"Вигідна пропозиція"}
                />
                <span className={css.banners__title}>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banners;
