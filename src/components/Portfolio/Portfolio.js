import React from "react";
import "../Portfolio/Portfolio.css";
import arrowLink from "../../images/arrow-link.png";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links-list">
        <a
          className="portfolio__link portfolio__link_underlined"
          href="https://github.com/theunstablelord/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Статичный сайт</p>
          <img
            className="portfolio__image"
            src={arrowLink}
            alt="Изображение стрелки"
          />
        </a>
        <a
          className="portfolio__link portfolio__link_underlined"
          href="https://github.com/theunstablelord/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Адаптивный сайт</p>
          <img
            className="portfolio__image"
            src={arrowLink}
            alt="Изображение стрелки"
          />
        </a>
        <a
          className="portfolio__link"
          href="https://github.com/theunstablelord/react-mesto-api-full-gha"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__text">Одностраничное приложение</p>
          <img
            className="portfolio__image"
            src={arrowLink}
            alt="Изображение стрелки"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;