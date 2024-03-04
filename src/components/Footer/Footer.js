import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__line"></div>
      <div className="footer__container">
        <nav className="footer__links-list">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/theunstablelord"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
        <p className="footer__year">©2023</p>
      </div>
    </footer>
  );
}

export default Footer;