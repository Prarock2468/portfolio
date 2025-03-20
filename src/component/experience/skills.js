"use client";
import React, { useEffect } from "react";
import Styles from "./experience.module.scss";
import { motion, useAnimation } from "framer-motion";
import Heading from "../../shared/textanimation/heading";
const Skills = () => {
  const controls = useAnimation();
  const controlsReverse = useAnimation(); // Separate control for reverse marquee

  // Start the animation when the component mounts
  useEffect(() => {
    controls.start("animate");
    controlsReverse.start("animateReverse");
  }, [controls, controlsReverse]);

  const marqueeVariants = {
    animate: {
      x: [0, -1080], // Left to right
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
    animateReverse: {
      x: [-1080, 0], // Right to left (reverse)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };
  const skills1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "NextJS",
    "Tailwind CSS",
    "Bootstrap All Versions",
    "Material UI",
  ];
  const skillBlocks1 = Array(4).fill(skills1);
  const skills2 = [
    "Page Optimization",
    "Landng Page",
    "Pixel Perfect Design",
    "Responsive Design",
    "PSD To HTML5",
    "Figma To HTML5",
    "Photoshop",
    "Saas",
    "SCSS",
    "Framer Motion",
    "Css Animation",
  ];
  const skillBlocks2 = Array(4).fill(skills2);
  return (
    <div className={Styles.skillWrap}>
      <div
        className={`${Styles.skillWrap__titleWrape} ${Styles.gridtitleWrape}`}
      >
        <h2 className={Styles.expTitle}>
          <Heading text="Skills & Expertise" />
        </h2>

        <div className={Styles.marquee_container}>
          <div
            className={Styles.marquee}
            onMouseEnter={() => controls.stop()} // Stop the animation on hover
            onMouseLeave={() => controls.start("animate")} // Restart on mouse leave
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "100%",
              marginTop: "35px",
            }}
          >
            {skillBlocks1.map((skillsList, index) => (
              <motion.div
                className={Styles.track}
                variants={marqueeVariants}
                animate={controls} // Use controls here to handle pause/resume
                key={index}
              >
                <ul className={Styles.skillSList}>
                  {skillsList.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div
            className={Styles.marquee}
            onMouseEnter={() => controlsReverse.stop()} // Stop the reverse animation on hover
            onMouseLeave={() => controlsReverse.start("animateReverse")} // Restart reverse on mouse leave
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "100%",
              marginTop: "15px",
            }}
          >
            {skillBlocks2.map((skillBlocks2, index) => (
              <motion.div
                className={Styles.track}
                variants={marqueeVariants}
                animate={controlsReverse}
                key={index}
              >
                <ul className={Styles.skillSList}>
                  {skillBlocks2.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
