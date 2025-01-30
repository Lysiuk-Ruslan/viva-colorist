import React from 'react';
import styles from './AboutMe.module.scss';

import myPhoto from 'img/Desktop/MyFotoDesktop1.jpg';
import vectorDesktop from 'svg/Vectordesktop.svg';

export default function AboutMe() {
  return (
    <section id="AboutMe">
      <div className="container">
        <div className={styles.AboutVector}>
          <img src={vectorDesktop} className={styles.Vector} alt="alt-text" />
        </div>
        <h2 className={styles.About}>Декілька слів про мене</h2>
        <div className={styles.Group}>
          <div className={styles.img}>
            <img src={myPhoto} className={styles.Photo} alt="alt-text" />
          </div>
          <div className={styles.MyAbout}>
            <p className={styles.item}>
              Мене звати Іванна Венгринська. <br></br> Я сертифікований майстер
              перукар-колорист. <br></br> Моя любов до перукарської справи
              народилася ще з дитинства. А моя історія в цій професії почалася
              15 років тому. Гадаю, саме немалий стаж свідчить про те, як людина
              любить та дорожить своєю роботою.
            </p>
            <p className={styles.item}>
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
