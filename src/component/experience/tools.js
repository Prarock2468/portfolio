"use client";
import React from "react";
import Styles from "./experience.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import icon1 from "../../../public/img/toolsIcon/tool1.png";
import icon2 from "../../../public/img/toolsIcon/tool2.png";
import icon3 from "../../../public/img/toolsIcon/tool3.png";
import icon4 from "../../../public/img/toolsIcon/tool4.png";
import icon5 from "../../../public/img/toolsIcon/tool5.png";
import Heading from "@/shared/textanimation/heading";
const Tools = () => {
  return (
    <div className={Styles.skillWrap}>
      <div
        className={`${Styles.skillWrap__titleWrape} ${Styles.gridtitleWrape} `}
      >
        <h2 className={Styles.expTitle}>
          <Heading text="Essential Tools" />
        </h2>
        <p className={Styles.toolsP}>
          A Comprehensive Collection of Useful Tools to Support and Optimize My
          Workflow
        </p>
        <div className={Styles.ImageIconWrapper}>
          <div className={Styles.imageIcon}>
            <Image src={icon1} height={25} width={25} alt="tools image" />
          </div>
          <div className={Styles.imageIcon}>
            <Image src={icon2} height={20} width={20} alt="tools image" />
          </div>
          <div className={Styles.imageIcon}>
            <Image src={icon3} height={25} width={25} alt="tools image" />
          </div>
          <div className={Styles.imageIcon}>
            <Image src={icon4} height={25} width={25} alt="tools image" />
          </div>
          <div className={Styles.imageIcon}>
            <Image src={icon5} height={20} width={20} alt="tools image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
