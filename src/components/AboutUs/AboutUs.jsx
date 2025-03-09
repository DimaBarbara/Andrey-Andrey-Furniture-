import React from "react";
import { NavLink } from "react-router-dom";
import AccordionComponent from "../AccordionComponent/AccordionComponent";
import s from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={s.divAbout}>
      <div className={s.divText}>
        <p className={s.pText}>
          Компанія "..." була заснована Андрієм Барбарою та Андрієм Папроцьким
          понад 10 років тому з метою створення стильних, зручних та
          високоякісних меблів для кожної оселі. Наш досвід та прагнення до
          досконалості дозволяють нам створювати продукцію, що відповідає
          найвищим стандартам якості і дизайну.
        </p>
      </div>

      <AccordionComponent />

      <div className={s.divText}>
        <p className={s.pText}>
          Ми завжди готові до співпраці! Якщо у вас є питання чи бажання
          отримати консультацію, зв'яжіться з нами через наші контактні канали
          або відвідайте наш магазин. Ми з радістю допоможемо створити меблі
          вашої мрії!
        </p>
      </div>
      <NavLink to="/contacts" className={s.navLink}>
        Зв'язатися з нами
      </NavLink>
    </div>
  );
};

export default AboutUs;
