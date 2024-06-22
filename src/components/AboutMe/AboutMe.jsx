import React from 'react';
import './AboutMe.styled.css';

import myPhoto from 'img/Desktop/MyFotoDesktop.webp';
import vectorDesktop from 'svg/Vectordesktop.svg';

export default function AboutMe() {
  return (
    <section>
      <div className="container">
        <div className="About-Vector">
          <img src={vectorDesktop} className="Vector" alt="alt-text" />
        </div>
        <h2 className="About">Декілька слів про мене</h2>
        <div className="About-grup">
          <div className="About-img">
            <img src={myPhoto} className="Photo" alt="alt-text" />
          </div>
          <div className="MyAbout">
            <p className="About-item">
              Мене звати Іванна Венгринська. <br></br> Я сертифікований майстер
              перукар-колорист. <br></br> Моя любов до перукарської справи
              народилася ще з дитинства. А моя історія в цій професії почалася
              15 років тому. Гадаю, саме немалий стаж свідчить про те, як людина
              любить та дорожить своєю роботою.
            </p>
            <p className="About-item">
              Я розумію, що кожна людина унікальна, тому до кожного клієнта
              підходжу з індивідуальною увагою.Використовую тільки найкращі
              професійні засоби для волосся, що забезпечують стійкий і здоровий
              результат. Ваше волосся буде виглядати доглянутим та блискучим. Я
              постійно вдосконалюю свої навички, відвідуючи семінари та
              майстер-класи. <br></br> Це дозволяє мені використовувати новітні
              техніки фарбування.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
