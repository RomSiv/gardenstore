import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import CatalogBtn from "../CatalogBtn/CatalogBtn";
import GreenLogo from "../GreenLogo/GreenLogo";
import ShoppingBagLogo from "../ShoppingBagLogo/ShoppingBagLogo";

export default function NavBar() {
  return (
    <div className={s.nav_bar}>
      <div className={s.green_menu}>
        <GreenLogo />
        <NavLink to="/categories">
          <CatalogBtn />
        </NavLink>
      </div>

      <div className={s.links}>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/sale">Sale</NavLink>
      </div>

      <NavLink to="/cart">
        <ShoppingBagLogo />
      </NavLink>
    </div>
  );
}
