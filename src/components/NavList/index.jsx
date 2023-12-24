import React from "react";
import css from "./slyle.module.css";
import { generalMenu } from "@/src/constants/index";
import Link from "next/link";

const NavList = ({menu}) => {




  return (
    <div className={menu? `${css.nav__wraper} ${css.nav__active}`: css.nav__wraper}>
    <ul className={css.nav__list}>
      {generalMenu.map(({ id, name, slug }) => (
        <li className={css.nav_item} key={id}>
          <Link href={slug}>{name}</Link>
        </li>
      ))} 
    </ul>
    <Link className={css.nav__login + ' ' + css.nav_item} href={'/login'}>Увійти в аккаунт</Link>
    </div>
  );
};

export default NavList;
