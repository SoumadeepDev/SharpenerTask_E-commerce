import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/Swiper.css";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import { useLocation } from "react-router-dom";

import slide_image_1 from "../assets/movies_assets/movie_0.jpeg";
import slide_image_2 from "../assets/movies_assets/movie_1.jpeg";
import slide_image_3 from "../assets/movies_assets/movie_2.jpeg";
import slide_image_4 from "../assets/movies_assets/movie_3.jpeg";
import slide_image_5 from "../assets/movies_assets/movie_4.jpeg";
import slide_image_6 from "../assets/movies_assets/movie_5.jpeg";
import slide_image_7 from "../assets/movies_assets/movie_6.jpeg";
import slide_image_8 from "../assets/movies_assets/movie_7.jpeg";
import slide_image_9 from "../assets/movies_assets/movie_8.jpeg";
import slide_image_10 from "../assets/movies_assets/movie_9.jpeg";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const Home = () => {
  const swiperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-bg");
      document.body.classList.remove("about-bg");
    } else {
      document.body.classList.remove("home-bg");
    }
  }, [location.pathname]);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    }, 5000); // Reduced delay for smoother transition

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container home-section">
      <h1 className="heading">Indian Oscar Nominated Films</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        ref={swiperRef}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default Home;
