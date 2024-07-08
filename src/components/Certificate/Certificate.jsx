import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Certificate.styled.scss';

// import required modules
import { Pagination } from 'swiper/modules';

import CertificateDesktop1 from 'img/Desktop/CertificateDesktop1.webp';
import CertificateDesktop2 from 'img/Desktop/CertificateDesktop2.webp';

export default function App() {
  return (
    <section className="Certificate">
      <div className="container">
        <h2 className="Certificate-Content">Сертифікати</h2>
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
          <SwiperSlide className="swiper-slide-container">
            <img src={CertificateDesktop1} alt="alt-text" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-container">
            <img src={CertificateDesktop2} alt="alt-text" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
