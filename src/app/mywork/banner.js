"use client";
import React from "react";
import Styles from "./work.module.scss";
import Heading from "@/shared/textanimation/heading";
import { motion } from "framer-motion";
import Image from "next/image";
const ProjectBanner = () => {
  return (
    <section className={Styles.projectPageBanner}>
      
      <div className={`container`}>
        <div className={Styles.bannerContent}>
          <h1 className={`${Styles.bannertitle}`}>
            <Heading text="Works & Projects" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }} // Start off with a vertical offset
            whileInView={{ opacity: 1, y: -2 }} // Move to original position on view
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
            className={Styles.bannerText}
          >
            Check out some of my design projects, meticulously crafted with love
            and dedication, each one reflecting the passion and soul I poured
            into every detail.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
