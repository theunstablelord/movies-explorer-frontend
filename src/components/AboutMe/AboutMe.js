import React from "react";
import "../AboutMe/AboutMe.css";
import avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line"></div>
      <div className="about-me__container">
        <img className="about-me__avatar" src={avatar} alt="Аватар пользователя" />
        <div className="about-me__text-container">
          <h3 className="about-me__name">Артём</h3>
          <h4 className="about-me__description">Исследователь JavaScript, 27 лет</h4>
          <p className="about-me__text">Живу в Севастополе, родом с Донбасса. Увлекаюсь
          автомобилями, музыкой, а также люблю смотреть аниме. С программированием ранее не был
          знаком, теперь имею представление об IT-индустрии в принципе.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/theunstablelord"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;