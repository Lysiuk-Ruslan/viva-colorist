import React from 'react';
/* // import css from './MyWorks.styles.css'; */

import Instagram from 'svg/Instagram.svg';

export default function MyWorks() {
  return (
    <section>
      <h2>Мої роботи ?</h2>
      <a
        href="https://www.instagram.com/viva_colorist?igsh=dXV1dzhvemNuemcx"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <p>Більше робіт в соцмережах</p>
        <img src={Instagram} alt="Instagram" width="40" height="40" />
      </a>
    </section>
  );
}
