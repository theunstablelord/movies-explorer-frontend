import React from "react";
import "./MoviesCard.css";
import firstPicture from "../../images/33_words_about_design.png";

function MoviesCard() {
  return (
    <li className="card">
      <img className="card__image" src={firstPicture} alt="33 слова о дизайне" />
      <div className="card__container">
        <h3 className="card__title">33 слова о дизайне</h3>
        <p className="card__film-duration">1ч 17м</p>
      </div>
      <button type="button" className="card__save-btn">Сохранить</button>
    </li>
  );
}

export default MoviesCard;