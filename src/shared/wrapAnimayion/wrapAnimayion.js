'use client'
import React from "react";
import { motion } from "framer-motion";
const WrapAnimayion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.65, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default WrapAnimayion;
