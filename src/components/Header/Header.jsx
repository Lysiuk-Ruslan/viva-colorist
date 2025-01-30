import React, { useState, useEffect, useRef } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import { useClickOutside } from '../../hooks/useClickOutside';
import './Header.styled.scss';

import Logo from 'svg/Logo.svg';

export default function Header() {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener('touchstart', event => {
      startTouchX = event.changedTouches[0].pageX;
      startTouchY = event.changedTouches[0].pageY;
    });

    document.addEventListener('touchend', event => {
      endTouchX = event.changedTouches[0].pageX;
      endTouchY = event.changedTouches[0].pageY;
      if (
        startTouchX < 100 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX > startTouchX
      )
        setOpen(true);
      if (
        startTouchX < 240 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX < startTouchX
      )
        setOpen(false);
    });
  }, []);

  return (
    <section className="header">
      <header className="container">
        <div className="container__nav">
          <a className="header__logo" href="/">
            <img
              src={Logo}
              className="header__image"
              alt="alt-text"
              width="200"
              height="29"
            />
          </a>
          <nav
            className={`header__nav ${isOpen ? 'active' : ''}`}
            ref={menuRef}
          >
            <ul className="header__nav-list">
              <li className="header__nav-item :active">
                <a className="header__nav-a" href="#AboutMe">
                  Про мене
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-a" href="#Favor">
                  Послуги
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-a" href="#MyWork">
                  Галерея
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-a" href="/">
                  Фарбування
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-a" href="#Footer">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
      </header>
    </section>
  );
}
