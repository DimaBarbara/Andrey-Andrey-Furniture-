import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const location = useLocation();

  const navItems = [
    { to: "/catalog", label: "Каталог" },
    { to: "/aboutUs", label: "Про нас" },
    { to: "/contacts", label: "Контакти" },
  ];

  const updateUnderlinePosition = (activeIndex) => {
    const activeLink = document.querySelectorAll(`.${s.link}`)[activeIndex];
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - activeLink.offsetParent.getBoundingClientRect().left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) =>
      location.pathname.startsWith(item.to)
    );
    updateUnderlinePosition(activeIndex);
  }, [location]);

  return (
    <nav className={s.navDiv}>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to={item.to}
          onClick={() => updateUnderlinePosition(index)}
        >
          {item.label}
        </NavLink>
      ))}
      <div
        className={s.underline}
        style={{
          left: `${underlineStyle.left}px`,
          width: `${underlineStyle.width}px`,
        }}
      />
    </nav>
  );
};

export default Navigation;
