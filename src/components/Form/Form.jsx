import React from 'react';
import './Form.styled.scss';

import FormSvg from 'svg/Form.svg';

export default function Form() {
  return (
    <section className="Form">
      <div className="container">
        <h2 className="Form-text">Залишилися запитання? </h2>
        <p className="Form-text-item">Ми з Вами зв’яжемося</p>
        <p className="Form-list">Залиште Ваші дані </p>
        <form action="Ім'я">
          <label htmlFor=""></label>
          <ul className="Form-subject">
            <li className="Form-subject-slogan">
              <input
                type="Ім'я"
                name="Ім'я"
                id="Ім'я"
                placeholder="Ім'я"
              ></input>
            </li>
            <li className="Form-subject-slogan">
              <input
                type="Номер телефону"
                name="Номер телефону"
                id="Номер телефону"
                placeholder="Номер телефону"
              ></input>
            </li>
            <li className="Form-subject-text">
              <input
                type="Текст"
                name="Текст"
                id="Текст"
                placeholder="Текст"
              ></input>
            </li>
          </ul>
          <button className="Form-btn">Надіслати</button>
        </form>
        <img
          className="Form-icon"
          src={FormSvg}
          alt="alt-text"
          width="140"
          height="142"
        />
      </div>
    </section>
  );
}
