import React from 'react';
import './Footer.styled.scss';

import VectorFooter1 from 'svg/VectorFooter1.svg';
import VectorLogo from 'svg/Logo.svg';
import VectorFooter2 from 'svg/VectorFooter2.svg';
import Geolokacija from 'svg/Geolokacija.svg';
import Phone from 'svg/Phone.svg';
import Instagram from 'svg/Instagram.svg';
import Telegram from 'svg/Telegram.svg';
import Viber from 'svg/Viber.svg';
import Ruka from 'svg/Ruka.svg';

export default function Footer() {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="Footer-Bloc">
          <img
            src={VectorFooter1}
            className="VectorFooter1"
            alt="alt-text"
            width="140"
            height="142"
          />
          <a href="/" className="Logo-link">
            <img
              src={VectorLogo}
              className="FooterLogo"
              alt="alt-text"
              width="50"
              height="60"
            />
          </a>
          <img
            src={VectorFooter2}
            className="VectorFooter2"
            alt="alt-text"
            width="140"
            height="142"
          />
        </div>
        <p className="Footer-Subtitle">Сертифікований майстер-колорист</p>
        <p className="Footer-Item">ivanna venhrynska</p>
        <p className="Footer-Subtitle2">Сертифікований майстер-колорист</p>
        <h2 className="Footer-contact">Контакти</h2>
        <ul className="Footer-Adres">
          <li>
            <a
              className="Footer-Address-List"
              href="https://maps.app.goo.gl/CWxUs7oP36Hy92zx8"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                className="Footer-icon"
                src={Geolokacija}
                alt="alt-text"
                width="40"
                height="40"
              />
              <p className="Footer-Address-Item">м. Коломия, вул. Валова, 29</p>
            </a>
          </li>
          <li>
            <a className="Footer-Address-List" href="tel:+380961111111">
              <img
                className="Footer-icon"
                src={Phone}
                alt="alt-text"
                width="40"
                height="40"
              />
              <p className="Footer-Address-Item">+38 096 111 11 11</p>
            </a>
          </li>
        </ul>
        <ul className="Footer-Social">
          <li className="Footer-Social-icons">
            <a
              href="https://www.instagram.com/viva_colorist?igsh=dXV1dzhvemNuemcx"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={Instagram} alt="Instagram" width="40" height="40" />
            </a>
          </li>
          <li className="Footer-Social-icons">
            <a
              href="https://t.me/Ivanna_Venhrynska"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={Telegram} alt="Telegram" width="40" height="40" />
            </a>
          </li>
          <li className="Footer-Social-icons">
            <a
              href="viber://chat?number=380973901222"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={Viber} alt="Viber" width="40" height="40" />
            </a>
          </li>
        </ul>
        <div className="Footer-Studio">
          <p className="Footer-Studio-text">WebStudio “R U K A”</p>
          <img src={Ruka} alt="alt-text" width="16" height="16" />
        </div>
        <p className="Footer-Studio-logo">Всі права захищені 2025</p>
      </div>
    </footer>
  );
}
