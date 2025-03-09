import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";
const Layout = ({ handleNavigate }) => {
  return (
    <div className={s.layout}>
      <Navigation handleNavigate={handleNavigate} />
      <Outlet />
    </div>
  );
};

export default Layout;
