"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "/Users/hanseopkim/FROMBOOK/frombook/src/app/data/googleBooksJson.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <object data="/line.svg" />
      <p>01. 나만의 기록</p>
      <object data="/line.svg" />

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={() => console.log("click1")}>
          <div>
            <img src="/book1.svg"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log("click2")}>
          <img src="/book2.svg"></img>
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log("click3")}>Slide 3</SwiperSlide>
        <SwiperSlide onClick={() => console.log("click4")}>Slide 4</SwiperSlide>
        <SwiperSlide onClick={() => console.log("click5")}>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>

      <br />
      <br />

      <object data="/line.svg" />
      <p>02. 타인의 기록</p>
      <object data="/line.svg" />

      <Swiper
        slidesPerView="auto"
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
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
    </div>
  );
}
