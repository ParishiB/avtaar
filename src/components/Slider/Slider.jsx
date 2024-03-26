import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
function Slider() {
  return (
    <div className="container mt-0 w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="images/img1.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img2.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img3.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img4.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img5.svg" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">&#8592;</ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"> &#8594;</ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
