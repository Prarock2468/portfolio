"use client";
import React from "react";
import Styles from "./testimonial.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "./testimonialdata.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Mousewheel, Navigation, Autoplay } from "swiper/modules";
import Heading from "../textanimation/heading";
import Counter from "../counter/counter";
import Link from "next/link";
const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        keyboard={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Mousewheel, Navigation, Autoplay]}
        className="mySwiper customeSwiter"
      >
        {Data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={Styles.reviewCard}>
                <div className={Styles.reviewCardContent}>
                  <div className={Styles.reviewCardTop}>
                    <h4 className={Styles.testimonialTitle}>
                      <Heading text={item.name} />
                    </h4>
                    <div className={Styles.detail}>
                      <Link
                        href={item.companyProfileOrWebsite}
                        target="_blank"
                        className={Styles.detailcontent}
                      >
                        {item.companyName}
                      </Link>
                      <p className={Styles.detailcontent}>{item.timestamp}</p>
                    </div>
                  </div>
                  <p className={Styles.description}>{item.review}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={Styles.reviewCounter}>
        <div className={Styles.reviewCounterin}>
          <div className={Styles.counterCard}>
            <h3 className={Styles.conutertitle}>Projects Done</h3>
            <div className={Styles.contNumber}>
              <Counter number={100} />
            </div>
          </div>
          |
          <div className={Styles.counterCard}>
            <h3 className={Styles.conutertitle}>Happy Review</h3>
            <div className={Styles.contNumber}>
              <Counter number={Data.length + 50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
