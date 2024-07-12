import React from 'react';
import './Banner.styled.scss';

export default function Banner() {
  return (
    <section className="Banner">
      <div className="container ">
        <p className="BannerSubject">Студія краси</p>
        <h1 className="BannerSubtitle">“V’IVA colorist”</h1>
        <p className="BannerText">Знаємо, як підкреслити Вашу природню красу</p>
        <button className="BannerButton">Хочу записатися</button>
      </div>
    </section>
  );
}
