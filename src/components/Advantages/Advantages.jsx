import React from 'react';
/* // import css from './Advantages.styles.css'; */

import Vector1 from 'svg/Vector1.svg';
import Vector2 from 'svg/Vector2.svg';
import Vector3 from 'svg/Vector3.svg';
import Vector4 from 'svg/Vector4.svg';
import Vector5 from 'svg/Vector5.svg';
import Vector6 from 'svg/Vector6.svg';

export default function Advantages() {
  return (
    <section>
      <h2>Чому клієнти обирають мене ?</h2>
      <ul>
        <li>
          <img src={Vector1} width="132" height="128" />
          <p>Індивідуальний підхід</p>
        </li>
        <li>
          <img src={Vector2} width="132" height="128" />
          <p>Індивідуальний підхід</p>
        </li>
        <li>
          <img src={Vector3} width="132" height="128" />
          <p>Індивідуальний підхід</p>
        </li>
        <li>
          <img src={Vector4} width="132" height="128" />
          <p>Індивідуальний підхід</p>
        </li>
        <li>
          <img src={Vector5} width="132" height="128" />
          <p>Індивідуальний підхід</p>
        </li>
        <li>
          <img src={Vector6} width="132" height="128" />
          <p>Індивідуальний підхід</p>
        </li>
      </ul>
    </section>
  );
}
