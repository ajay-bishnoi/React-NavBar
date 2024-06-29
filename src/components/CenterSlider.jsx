import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Sliderimg1 from "../assets/img/png/slidercar1.webp";
import Sliderimg2 from "../assets/img/png/slidercar2.webp";
import Sliderimg3 from "../assets/img/png/slidercar3.webp";
import Sliderimg4 from "../assets/img/png/slidercar4.webp";
import Sliderimg5 from "../assets/img/png/slidercar5.webp";
import "swiper/css";
import { NextBtn, Prev } from "../assets/Svgicon";
import { Link } from "react-router-dom";

const CenterSlider = () => {
  return (
    <div className="bg-orange py-5">
      <Container className="px-0">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={Sliderimg1} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg2} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg3} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg4} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg5} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg2} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg1} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg3} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg4} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sliderimg5} alt="slider-image" />
          </SwiperSlide>

          <div className="slider-controler ">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        <div className="slider-arrow d-flex align-items-center justify-content-center swiper-btn-prev">
          <Prev />
        </div>
        <div className="slider-arrow d-flex align-items-center justify-content-center swiper-btn-next">
          <NextBtn />
        </div>
      </Container>
    </div>
  );
};

export default CenterSlider;
