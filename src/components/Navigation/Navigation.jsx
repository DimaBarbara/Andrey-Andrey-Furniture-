import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.navLink} to="/">
        Home
      </NavLink>

      <NavLink className={s.navLink} to="/catalog">
        Каталог
      </NavLink>
      <NavLink className={s.navLink} to="/aboutUs">
        Про нас
      </NavLink>
      <NavLink className={s.navLink} to="/contacts">
        Контакти
      </NavLink>
    </nav>
  );
};

export default Navigation;
