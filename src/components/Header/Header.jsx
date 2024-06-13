import React from 'react';
// import css from './Header.styles.css';

import vectorLogo from 'svg/Vectorlogo.svg';

export default function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <span>V’IVA</span>
          <img src={vectorLogo} alt="alt-text" width="50" height="60" />
          <span>colorist</span>
        </a>
        <ul>
          <li>
            <a href="/">Про мене</a>
          </li>
          <li>
            <a href="/">Галерея</a>
          </li>
          <li>
            <a href="/">Послуги</a>
          </li>
          <li>
            <a href="/">Контакти</a>
          </li>
        </ul>
        <a href="tel:+380973901222">+380973901222</a>
      </nav>
    </header>
  );
}
