import React from 'react';
/* // import css from './Favor.styles.css'; */

import FavorDesktop1 from 'img/FavorDesktop1.jpg';
import FavorDesktop2 from 'img/FavorDesktop2.jpg';
import FavorDesktop3 from 'img/FavorDesktop3.jpg';
import FavorDesktop4 from 'img/FavorDesktop4.jpg';
import FavorDesktop5 from 'img/FavorDesktop5.jpg';
import FavorDesktop6 from 'img/FavorDesktop6.jpg';

export default function Favor() {
  return (
    <section>
      <h2>Послуги</h2>
      <ul>
        <li>
          <img src={FavorDesktop1} alt="alt-text" width="449" />
          <p>Фарбування волосся</p>
        </li>
        <li>
          <img src={FavorDesktop2} alt="alt-text" width="449" />
          <p>Відновлення волосся</p>
        </li>
        <li>
          <img src={FavorDesktop3} alt="alt-text" width="449" />
          <p>Жіночі стрижки</p>
        </li>
        <li>
          <img src={FavorDesktop4} alt="alt-text" width="449" />
          <p>Зачіски</p>
        </li>
        <li>
          <img src={FavorDesktop5} alt="alt-text" width="449" />
          <p>Вихід з чорного</p>
        </li>
        <li>
          <img src={FavorDesktop6} alt="alt-text" width="449" />
          <p>Доглядові процедури</p>
        </li>
      </ul>
    </section>
  );
}
