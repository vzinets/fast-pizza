import { useState } from "react";
import css from "./style.module.css";
import Logo from "./logo";
import NavList from "../NavList";
import Cart from "../Cart";
import Burger from "./Burger";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className={css.header}>
      <div className="container">
        <div className={css.header_inner}>
          <Logo />

          <div className={css.header_wrapper}>
            <Cart  />
            <Burger menu={menu} setMenu={setMenu} />
            <NavList menu={menu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
