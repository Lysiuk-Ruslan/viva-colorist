import React from 'react';
/* // import css from './Footer.styles.css'; */

import VectorFooter from 'svg/VectorFooter.svg';
import VectorLogo from 'svg/Vectorlogo.svg';
import Geolokacija from 'svg/Geolokacija.svg';
import Phone from 'svg/Phone.svg';
import Ruka from 'svg/Ruka.svg';

export default function Footer() {
  return (
    <footer>
      <img src={VectorFooter} alt="alt-text" width="691" height="398" />
      <a href="/">
        <span>V’IVA</span>
        <img src={VectorLogo} alt="alt-text" width="50" height="60" />
        <span>colorist</span>
      </a>
      <p>ivanna venhrynska</p>
      <p>Сертифікований майстер-колорист</p>
      <h2>Контакти</h2>
      <ul>
        <li>
          <a
            href="https://maps.app.goo.gl/CWxUs7oP36Hy92zx8"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img src={Geolokacija} alt="alt-text" width="40" height="40" />
            <p>м. Коломия, вул. Валова, 29</p>
          </a>
        </li>
        <li>
          <a href="tel:+380961111111" class="footer__address__link">
            <img src={Phone} alt="alt-text" width="40" height="40" />
            <p>+38 096 111 11 11</p>
          </a>
        </li>
      </ul>
      <p>
        WebStudio<span>“R U K A”</span>
      </p>
      <img src={Ruka} alt="alt-text" width="16" height="16" />
      <p>Всі права захищені 2024</p>
    </footer>
  );
}
