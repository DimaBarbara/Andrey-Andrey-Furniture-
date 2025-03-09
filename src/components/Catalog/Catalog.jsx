import React from "react";
import furniture from "../../assets/furniture.json";
import s from "./Catalog.module.css";
import { Link, useLocation } from "react-router-dom";
const Catalog = () => {
  const location = useLocation();
  return (
    <ul>
      {furniture.map((item, index) => (
        <li key={index}>
          <Link
            to={`/catalog/${item.id}`}
            state={{ from: location.pathname + location.search }}
          >
            <img src={`/img/${item.imageUrl}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
