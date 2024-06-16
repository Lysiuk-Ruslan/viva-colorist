import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './MyWorks.styled.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Instagram from 'svg/Instagram.svg';
import SlaidDesktop1 from 'img/Swiper/Mobile/SlaidMobile1.webp';
import SlaidDesktop2 from 'img/Swiper/Mobile/SlaidMobile2.webp';
import SlaidDesktop3 from 'img/Swiper/Mobile/SlaidMobile3.webp';
import SlaidDesktop4 from 'img/Swiper/Mobile/SlaidMobile4.webp';
import SlaidDesktop5 from 'img/Swiper/Mobile/SlaidMobile5.webp';
import SlaidDesktop6 from 'img/Swiper/Mobile/SlaidMobile6.webp';
import SlaidDesktop7 from 'img/Swiper/Mobile/SlaidMobile7.webp';
import SlaidDesktop8 from 'img/Swiper/Mobile/SlaidMobile8.webp';
import SlaidDesktop9 from 'img/Swiper/Mobile/SlaidMobile9.webp';
import SlaidDesktop10 from 'img/Swiper/Mobile/SlaidMobile10.webp';
import SlaidDesktop11 from 'img/Swiper/Mobile/SlaidMobile11.webp';
import SlaidDesktop12 from 'img/Swiper/Mobile/SlaidMobile12.webp';

export default function App() {
  return (
    <section>
      <h2>Мої роботи</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SlaidDesktop1} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop2} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop3} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop4} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop5} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop6} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop7} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop8} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop9} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop10} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop11} alt="alt-text" width="300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlaidDesktop12} alt="alt-text" width="300" />
        </SwiperSlide>
      </Swiper>
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
