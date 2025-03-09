import React from "react";
import {
  FaTelegram,
  FaViber,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa"; // Импортируем иконки
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={s.container}>
      <div className={s.contactInfo}>
        <h2>Контакти:</h2>
        <p className={s.pText}>+380936494845 - Андрій Барбара</p>
        <p className={s.pText}>+380932061398 - Андрій Папроцький</p>
      </div>

      <div className={s.address}>
        <h2>Адреса:</h2>
        <p className={s.pText}>
          Озерна вул., Новосілки, Київська область, 03027
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1109.502598753322!2d30.45203812657931!3d50.35215808398894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8413db92e6d%3A0x8bdab43ba2a887ec!2z0J7Qt9C10YDQvdCw0Y8g0YPQuy4sINCd0L7QstC-0YHQtdC70LrQuCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDMwMjc!5e1!3m2!1sru!2sua!4v1741535328601!5m2!1sru!2sua"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={s.iframe}
      ></iframe>

      <div className={s.socialMedia}>
        <h2>Соціальні мережі:</h2>
        <div className={s.person}>
          <div>
            <h3>Андрій Барбара</h3>
            <p className={s.pText}>Графік роботи: Пн-Пт 9:00 - 18:00</p>{" "}
          </div>
          <div className={s.socialLinks}>
            <a
              href="https://t.me/andriy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className={s.iconTelegram} />
              Telegram
            </a>
            <a
              href="viber://chat?number=380936494845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaViber className={s.iconViber} />
              Viber
            </a>
            <a
              href="https://wa.me/380936494845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={s.iconWhatsapp} />
              Whatsapp
            </a>
            <a
              href="https://m.me/andriy.barbara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookMessenger className={s.iconMessenger} />
              Messenger
            </a>
          </div>
        </div>

        <div className={s.person}>
          <div>
            <h3>Андрій Папроцький</h3>
            <p className={s.pText}>Графік роботи: Пн-Пт 9:00 - 18:00</p>{" "}
          </div>
          <div className={s.socialLinks}>
            <a
              href="https://t.me/andriy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className={s.iconTelegram} />
              Telegram
            </a>
            <a
              href="viber://chat?number=380932061398"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaViber className={s.iconViber} />
              Viber
            </a>
            <a
              href="https://wa.me/380932061398"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={s.iconWhatsapp} />
              Whatsapp
            </a>
            <a
              href="https://m.me/andriy.paprotsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookMessenger className={s.iconMessenger} />
              Messenger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
