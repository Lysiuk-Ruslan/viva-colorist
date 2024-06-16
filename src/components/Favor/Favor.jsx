import React from 'react';
/* // import css from './Favor.styles.css'; */

import FavorDesktop1 from 'img/Mobile/FavorModile1.webp';
import FavorDesktop2 from 'img/Mobile/FavorModile2.webp';
import FavorDesktop3 from 'img/Mobile/FavorModile3.webp';
import FavorDesktop4 from 'img/Mobile/FavorModile4.webp';
import FavorDesktop5 from 'img/Mobile/FavorModile5.webp';
import FavorDesktop6 from 'img/Mobile/FavorModile6.webp';

export default function Favor() {
  return (
    <section>
      <h2>Послуги</h2>
      <ul>
        <li>
          <img src={FavorDesktop1} alt="alt-text" width="300" />
          <p>Фарбування волосся</p>
        </li>
        <li>
          <img src={FavorDesktop2} alt="alt-text" width="300" />
          <p>Відновлення волосся</p>
        </li>
        <li>
          <img src={FavorDesktop3} alt="alt-text" width="300" />
          <p>Жіночі стрижки</p>
        </li>
        <li>
          <img src={FavorDesktop4} alt="alt-text" width="300" />
          <p>Зачіски</p>
        </li>
        <li>
          <img src={FavorDesktop5} alt="alt-text" width="300" />
          <p>Вихід з чорного</p>
        </li>
        <li>
          <img src={FavorDesktop6} alt="alt-text" width="300" />
          <p>Доглядові процедури</p>
        </li>
      </ul>
    </section>
  );
}
