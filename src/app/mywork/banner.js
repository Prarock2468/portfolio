"use client";
import React from "react";
import Styles from "./work.module.scss";
import Heading from "@/shared/textanimation/heading";
import { motion } from "framer-motion";
import Image from "next/image";
import BannerImage from "../../../public/img/projectbanner.png";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
const ProjectBanner = () => {
  return (
    <WrapAnimayion>
      <section className={Styles.projectPageBanner}>
        <div className={`container ${Styles.projectcontainer}`}>
          <Image
            src={BannerImage}
            height={450}
            width={1400}
            className={Styles.bannerImage}
          />
          <div className={Styles.bannerContent}>
            <h1 className={`${Styles.bannertitle}`}>
              <Heading text="Works & Projects" />
            </h1>
          </div>
        </div>
      </section>
    </WrapAnimayion>
  );
};

export default ProjectBanner;
