"use client";
import React from "react";
import { motion } from "framer-motion";
import Styles from "./heading.module.scss";
const Heading = ({ text }) => {
  return (
    <>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index}>&nbsp;</span> // Preserve space between words
        ) : (
          <motion.span
            key={index}
            className={Styles.character}
            initial={{ opacity: 0, y: -30 }} // Start slightly above
            whileInView={{ opacity: 1, y: 0 }} // Animate to normal position
            transition={{
              duration: 0.3,
              delay: index * 0.03, // Stagger animation for each character
            }}
          >
            {char}
          </motion.span>
        )
      )}
    </>
  );
};

export default Heading;
