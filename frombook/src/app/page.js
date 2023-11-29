"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "/Users/hanseopkim/FROMBOOK/frombook/src/app/data/googleBooksJson.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// read on picture by clicking picture
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Home() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <div>
      <object data="/line.svg" />
      <p>01. 나만의 기록</p>
      <object data="/line.svg" />
      <Swiper
        slidesPerView={5}
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

      <br />
      <br />

      <object data="/line.svg" />
      <p>02. 타인의 기록</p>
      <object data="/line.svg" />

      <Swiper
        slidesPerView={5}
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
