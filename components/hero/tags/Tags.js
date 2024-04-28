"use client";
import React, { useState } from "react";
import style from "./tag.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Sliderbtn from "./Button/Sliderbtn";
const Tags = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className=" absolute px-[24px]" id={style.wrap}>
      <div className="title flex item-center justify-between">
        Popular Themes.
        <Sliderbtn swiperInstance={swiperInstance} />
      </div>
      <div className={style.tags}>
        <Swiper
          slidesPerView={6}
          spaceBetween={16}
          onSwiper={setSwiperInstance}
          navigation={{ nextEl: "#next", prevEl: "#prev" }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              murder
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              serial killer
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              world war 2
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              revenge
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              world war ii
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              coming of age
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              murder
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              murder
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              murder
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              murder
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className={style.tag}>
              murder
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tags;
