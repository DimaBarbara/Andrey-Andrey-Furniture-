import React from "react";
import furniture from "../../assets/furniture.json";
import s from "./Catalog.module.css";
import { Link, useLocation } from "react-router-dom";
const Catalog = () => {
  const location = useLocation();
  return (
    <ul className={s.ulCat}>
      {furniture.map((item, index) => (
        <li className={s.liCat} key={index}>
          <Link
            to={`/catalog/${item.id}`}
            state={{ from: location.pathname + location.search }}
          >
            <div className={s.divCat}>
              <h2 className={s.hCat}>{item.name}</h2>
              <img
                className={s.imgCat}
                src={`/img/${item.imageUrl}`}
                alt={item.name}
              />

              <p className={s.pCat}>{item.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
