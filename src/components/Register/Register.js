import React from "react";
import WindowWithForm from "../WindowWithForm/WindowWithForm";
import "../WindowWithForm/WindowWithForm.css";

function Register() {
  return (
    <WindowWithForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы? "
      linkText="Войти"
      adress="/signin"
    >
      <label className="window__form-label" htmlFor="username">Имя</label>
      <input
        className="window__form-item"
        id="user_name"
        type="text"
        name="name"
        placeholder="Имя"
        required
      />
      <span className="window__form-item-error">Имя не должно содержать цифр</span>
      <label className="window__form-label" htmlFor="useremail">E-mail</label>
      <input
        className="window__form-item"
        id="user_email"
        type="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <span className="window__form-item-error">E-mail введен некорректно</span>
      <label className="window__form-label" htmlFor="userpassword">Пароль</label>
      <input
        className="window__form-item"
        id="user_password"
        type="password"
        name="password"
        placeholder="Пароль"
        autoComplete="on"
        required />
      <span className="window__form-item-error">Пароль должен содержать не менее 6 символов</span>
    </WindowWithForm>
  );
}

export default Register;