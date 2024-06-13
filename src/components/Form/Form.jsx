import React from 'react';
/* // import css from './Form.styles.css'; */

import FormSvg from 'svg/Form.svg';

export default function Form() {
  return (
    <section>
      <h2>Залишилися запитання? </h2>
      <p>Ми з Вами зв’яжемося</p>
      <p>Залиште Ваші дані </p>
      <form action="Ім'я">
        <label htmlFor=""></label>
        <ul>
          <li>
            <input type="Ім'я" name="Ім'я" id="Ім'я" placeholder="Ім'я"></input>
          </li>
          <li>
            <input
              type="Номер телефону"
              name="Номер телефону"
              id="Номер телефону"
              placeholder="Номер телефону"
            ></input>
          </li>
          <li>
            <input
              type="Текст"
              name="Текст"
              id="Текст"
              placeholder="Текст"
            ></input>
          </li>
        </ul>
        <button>Надіслати</button>
      </form>
      <img src={FormSvg} width="743" height="948" />
    </section>
  );
}
