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
                      <Heading text={item.reviewerName} />
                    </h4>
                    <div className={Styles.detail}>
                      <p className={Styles.detailcontent}>{item.companyName}</p>
                      <p className={Styles.detailcontent}>
                        {item.reviewerDesignation}
                      </p>
                      {/* <p className={Styles.detailcontent}>{item.projectName}</p> */}
                    </div>
                    <p>{item.reviewDate}</p>
                  </div>
                  <p className={Styles.description}>{item.reviewDescription}</p>
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
              <Counter number={70} /> 
            </div>
          </div>
          |
          <div className={Styles.counterCard}>
            <h3 className={Styles.conutertitle}>Happy Review</h3>
            <div className={Styles.contNumber}>
              <Counter number={Data.length + 40} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
