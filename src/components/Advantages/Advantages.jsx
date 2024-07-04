import React from 'react';
import './Advantages.styles.scss';

import Vector1 from 'svg/Vector1.svg';
import Vector2 from 'svg/Vector2.svg';
import Vector3 from 'svg/Vector3.svg';
import Vector4 from 'svg/Vector4.svg';
import Vector5 from 'svg/Vector5.svg';
import Vector6 from 'svg/Vector6.svg';

export default function Advantages() {
  return (
    <section className="Advant">
      <div className="container">
        <div className="Advantages">
          <h2 className="Advantages-title">Чому клієнти обирають мене?</h2>
          <ul className="Advantages-list">
            <li className="Advantages-item">
              <img
                src={Vector1}
                className="Advantages-image"
                alt="alt-text"
                width="44"
                height="43"
              />
              <p className="Advantages-text">Індивідуальний підхід</p>
            </li>
            <li className="Advantages-item">
              <img
                src={Vector2}
                className="Advantages-image"
                alt="alt-text"
                width="44"
                height="43"
              />
              <p className="Advantages-text">Більше 15 років досвіду роботи</p>
            </li>
            <li className="Advantages-item">
              <img
                src={Vector3}
                className="Advantages-image"
                alt="alt-text"
                width="44"
                height="43"
              />
              <p className="Advantages-text">Високоякісні матеріали</p>
            </li>
            <li className="Advantages-item">
              <img
                src={Vector4}
                className="Advantages-image"
                alt="alt-text"
                width="44"
                height="43"
              />
              <p className="Advantages-text">Фарбування сучасними методами</p>
            </li>
            <li className="Advantages-item">
              <img
                src={Vector5}
                className="Advantages-image"
                alt="alt-text"
                width="44"
                height="43"
              />
              <p className="Advantages-text">Підбір професійного догляду</p>
            </li>
            <li className="Advantages-item">
              <img
                src={Vector6}
                className="Advantages-image"
                alt="alt-text"
                width="44"
                height="43"
              />
              <p className="Advantages-text">
                Зміцнення волосся під час процедур
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
