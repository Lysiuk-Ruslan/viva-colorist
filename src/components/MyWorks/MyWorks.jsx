import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './MyWorks.styled.scss';

// import required modules
import { Pagination } from 'swiper/modules';

import Instagram from 'svg/Instagram.svg';
import SlaidDesktop1 from 'img/Swiper/Desktop/SlaidDesktop1.webp';
import SlaidDesktop2 from 'img/Swiper/Desktop/SlaidDesktop2.webp';
import SlaidDesktop3 from 'img/Swiper/Desktop/SlaidDesktop3.webp';
import SlaidDesktop4 from 'img/Swiper/Desktop/SlaidDesktop4.webp';
import SlaidDesktop5 from 'img/Swiper/Desktop/SlaidDesktop5.webp';
import SlaidDesktop6 from 'img/Swiper/Desktop/SlaidDesktop6.webp';
import SlaidDesktop7 from 'img/Swiper/Desktop/SlaidDesktop7.webp';
import SlaidDesktop8 from 'img/Swiper/Desktop/SlaidDesktop8.webp';
import SlaidDesktop9 from 'img/Swiper/Desktop/SlaidDesktop9.webp';
import SlaidDesktop10 from 'img/Swiper/Desktop/SlaidDesktop10.webp';
import SlaidDesktop11 from 'img/Swiper/Desktop/SlaidDesktop11.webp';
import SlaidDesktop12 from 'img/Swiper/Desktop/SlaidDesktop12.webp';

export default function App() {
  return (
    <section className="MyWorks">
      <div className="container">
        <h2 className="MyWorks-Content">Мої роботи</h2>
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
          <div className="MyWorks-social">
            <p className="MyWorks-social-text">Більше робіт в соцмережах</p>
            <img
              className="MyWorks-social-icon"
              src={Instagram}
              alt="Instagram"
              width="40"
              height="40"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
