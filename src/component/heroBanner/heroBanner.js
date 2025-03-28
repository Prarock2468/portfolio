"use client";
import React from "react";
import Styles from "./hero.module.scss";
import Image from "next/image";
import MyImage from "../../../public/img/myimage.png";
import { useEffect, useState, useRef } from "react";
import * as motion from "motion/react-client";
import PageButton from "@/shared/button/button";
import { MdOutlineDeveloperMode } from "react-icons/md";
import {
  PiDevicesFill,
  PiCameraSlashDuotone,
  PiCursorClickFill,
  PiChampagneDuotone,
  PiPhoneCallFill,
} from "react-icons/pi";

import { GiFrozenBody, GiBugleCall } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import Heading from "@/shared/textanimation/heading";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
import Link from "next/link";
const HeroBanner = () => {
  // Refs for each element inside the parent container
  const imageRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  // Ref for the parent container (heroContent__rightContent)
  const containerRef = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const elements = [
    imageRef,
    div1Ref,
    div2Ref,
    div3Ref,
    div4Ref,
    div5Ref,
    div6Ref,
  ];
  let currentIndex = 0;

  let previousElement = null; // Variable to keep track of the previous element

  const moveCursorToElement = (elementRef) => {
    const rect = elementRef.current?.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (rect) {
      const elementWidth = rect.width;
      const elementHeight = rect.height;

      const posX = rect.left - containerRect.left + elementWidth - 20;
      const posY = rect.top - containerRect.top + elementHeight - 20;

      setCursorPosition({
        x: Math.min(Math.max(posX, 0), containerRect.width - 20),
        y: Math.min(Math.max(posY, 0), containerRect.height - 20),
      });

      if (previousElement && previousElement !== elementRef.current) {
        previousElement.classList.remove("active-class");
      }

      if (elementRef.current) {
        elementRef.current.classList.add("active-class");
        previousElement = elementRef.current;
      }
    }
  };

  useEffect(() => {
    // Function to start moving the cursor automatically
    const moveCursorAutomatically = () => {
      const interval = setInterval(() => {
        // Move the cursor to the center of the current element
        currentIndex = (currentIndex + 1) % elements.length; // Loop back to the first element after the last one
        moveCursorToElement(elements[currentIndex]);
      }, 2000); // Move every 2 seconds

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    };

    moveCursorAutomatically();
  }, []);

  return (
    <WrapAnimayion>
      <section className={Styles.HeroBanner}>
        <div className={`container ${Styles.heroContainer}`}>
          <div className={Styles.heroContent}>
            <div className={Styles.heroContent__left}>
              {/* Subtitle Animation */}
              
                <Heading text={"Hey there!"} />
             
              {/* Hero Title Animation */}
              <motion.h1
                className={Styles.heroContent__Herotitle}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                I'm Pradeep Kumar, a UI & Frontend developer creating seamless,
                responsive interfaces with clean and efficient code.
              </motion.h1>
              {/* Available Text Animation */}
              <div className={Styles.BannerBtnWrap}>
                <PageButton link="/resume" targetLink="_blank">
                  <span>Hire Me</span>
                  <GiBugleCall />
                </PageButton>
                <Link
                  href={"https://wa.me/919935990927"}
                  target="_blank"
                  className={Styles.whatsbtn}
                >
                  <p className={Styles.whatsbtnp}>
                    <span>Talk To Me</span>
                    <PiPhoneCallFill />
                  </p>
                </Link>
              </div>
              
            </div>
            <div className={Styles.heroContent__right}>
              <div
                className={Styles.heroContent__rightContent}
                ref={containerRef}
              >
                {/* Image Bounce Effect */}
                <motion.div
                  ref={imageRef}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className={`${Styles.imageContainer} animImage`} // Moved inline styles to CSS class
                >
                  <Image
                    src={MyImage}
                    alt="My image"
                    height={150}
                    width={150}
                    className={`${Styles.centerImage}`}
                  />
                </motion.div>

                {/* Divs with Bounce Effects */}
                <motion.div
                  ref={div1Ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
                  }}
                  className={`${Styles.div} ${Styles.div1} divWrapper`}
                >
                  <MdOutlineDeveloperMode />
                  <span>Page Performance</span>
                </motion.div>

                <motion.div
                  ref={div2Ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
                  }}
                  className={`${Styles.div} ${Styles.div2} divWrapper`}
                >
                  <GiFrozenBody />
                  <span>Design Trends</span>
                </motion.div>

                <motion.div
                  ref={div3Ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
                  }}
                  className={`${Styles.div} ${Styles.div3} divWrapper`}
                >
                  <PiDevicesFill />
                  <span>Responsive Design</span>
                </motion.div>

                <motion.div
                  ref={div4Ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className={`${Styles.div} ${Styles.div4} divWrapper`}
                >
                  <GrReactjs />
                  <span> Version Control</span>
                </motion.div>
                <motion.div
                  ref={div5Ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className={`${Styles.icondiv} ${Styles.div5} icondivWrapper`}
                >
                  <PiCameraSlashDuotone />
                </motion.div>
                <motion.div
                  ref={div6Ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className={`${Styles.icondiv} ${Styles.div6} icondivWrapper`}
                >
                  <PiChampagneDuotone />
                </motion.div>

                <motion.div
                  className={Styles.cursorMove}
                  animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                  }}
                  transition={{
                    duration: 0.5, // Duration for smooth transition to each position
                    ease: "easeInOut",
                  }}
                >
                  <PiCursorClickFill className={Styles.cursorMouse} />
                  <PageButton>Pradeep K.</PageButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WrapAnimayion>
  );
};

export default HeroBanner;
