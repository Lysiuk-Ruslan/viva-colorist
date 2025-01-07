import React from 'react';
import './Favor.styles.scss';

import FavorDesktop1 from 'img/Desktop/FavorDesktop1.webp';
import FavorDesktop2 from 'img/Desktop/FavorDesktop2.webp';
import FavorDesktop3 from 'img/Desktop/FavorDesktop3.webp';
import FavorDesktop4 from 'img/Desktop/FavorDesktop4.webp';
import FavorDesktop5 from 'img/Desktop/FavorDesktop5.webp';
import FavorDesktop6 from 'img/Desktop/FavorDesktop6.webp';

export default function Favor() {
  return (
    <section id="Favor">
      <div className="container">
        <h2 className="Favor">Мої послуги</h2>
        <ul className="Favor-list">
          <li className="Favor-item">
            <img
              className="Favor-Photo"
              src={FavorDesktop1}
              alt="alt-text"
              width="300"
            />
            <p className="Favor-text">Фарбування волосся</p>
          </li>
          <li className="Favor-item">
            <img
              className="Favor-Photo"
              src={FavorDesktop2}
              alt="alt-text"
              width="300"
            />
            <p className="Favor-text">Відновлення волосся</p>
          </li>
          <li className="Favor-item">
            <img
              className="Favor-Photo"
              src={FavorDesktop3}
              alt="alt-text"
              width="300"
            />
            <p className="Favor-text">Жіночі стрижки</p>
          </li>
          <li className="Favor-item">
            <img
              className="Favor-Photo"
              src={FavorDesktop4}
              alt="alt-text"
              width="300"
            />
            <p className="Favor-text">Зачіски</p>
          </li>
          <li className="Favor-item">
            <img
              className="Favor-Photo"
              src={FavorDesktop5}
              alt="alt-text"
              width="300"
            />
            <p className="Favor-text">Вихід з чорного</p>
          </li>
          <li className="Favor-item">
            <img
              className="Favor-Photo"
              src={FavorDesktop6}
              alt="alt-text"
              width="300"
            />
            <p className="Favor-text">Доглядові процедури</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
