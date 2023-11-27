"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "/Users/hanseopkim/FROMBOOK/frombook/src/app/data/googleBooksJson.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <>
      <div class="search_bar"></div>
      <h2>01. 기록의 방</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/book1.svg"></img>
          <br></br>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img src="/book2.svg"></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <br />
      <br />

      <h2>02. 독자의 방</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/book1.svg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/book2.svg"></img>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
