"use client";
import React from "react";
import { motion } from "framer-motion";
import MyImage from "../../../public/img/testimonial.png";
import Styles from "./testimonial.module.scss";
import ReviewSlider from "./reviewSlider";
import Image from "next/image";
import WrapAnimayion from "../wrapAnimayion/wrapAnimayion";

const Testimonial = () => {
  return (
    <WrapAnimayion>
      <div className={Styles.testimonialWrapper}>
        <div className="container">
          <div className={`shadow ${Styles.testiContainer}`}>
            <div className={Styles.testiContainerLeft}>
              <ReviewSlider />
            </div>

            <div className={Styles.testiContainerRight}>
              <Image src={MyImage} alt="Testimonial" height={246} width={450} />
            </div>
          </div>
        </div>
      </div>
    </WrapAnimayion>
  );
};

export default Testimonial;
