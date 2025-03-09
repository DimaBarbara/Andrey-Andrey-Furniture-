import React from "react";
import s from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
const HomePage = ({ handleNavigate }) => {
  return (
    <div className={s.divCont}>
      <button className={s.buttonNav} onClick={handleNavigate}>
        Вибрати меблі
      </button>
      <nav className={s.navHome}>
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
    </div>
  );
};

export default HomePage;
