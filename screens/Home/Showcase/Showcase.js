"use client";

import React from "react";
import styles from "./showcase.module.css";
import cn from "classnames";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { mock } from "@/constants";

export default function Showcase({ showcase = mock.showcase }) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const swiperRef = React.useRef(null);

  return (
    <section id="showcase" className={cn("section", styles.section)}>
      <div className={cn("", styles.container)}>
        <div className={cn("h2", styles.title)}>Showcase</div>

        <div className={styles.carousel}>
          <Swiper
            onInit={(swiper) => {
              swiperRef.current = swiper;
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          >
            {showcase.map((src, index) => (
              <SwiperSlide
                key={index}
                className={cn(styles.image_container, {
                  [styles.active]: index === activeSlide,
                })}
              >
                <img src={src} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={cn("container", styles.buttons)}>
          <button className={styles.button} ref={prevRef}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className={styles.button} ref={nextRef}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
