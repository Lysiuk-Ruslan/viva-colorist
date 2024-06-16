import React from 'react';
/* // import css from './Certificate.styles.css'; */

import Certificate1 from 'img/Mobile/CertificateMobile1.webp';
import Certificate2 from 'img/Desktop/CertificateDesktop2.jpg';

export default function Certificate() {
  return (
    <section>
      <h2>Сертифікати</h2>
      <ul>
        <li>
          <img src={Certificate1} alt="Certificate1" width="320" />
        </li>
        <li>
          <img src={Certificate2} alt="Certificate2" width="320" />
        </li>
      </ul>
    </section>
  );
}
