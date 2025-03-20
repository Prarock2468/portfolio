"use client";
import { useState, useEffect, useRef } from "react";
import Styles from "./counter.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Counter = ({ number }) => {
  const [count, setCount] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver to check if the counter is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && count < number) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Increase speed by decreasing delay

      return () => clearInterval(interval);
    }
  }, [isInView, count, number]);

  return (
    <div className={Styles.Counter} ref={counterRef}>
      <motion.div className={Styles.conterWrapeer}>
        <AnimatePresence>
          <motion.p
            exit={{ y: -75, opacity: 0, position: "absolute" }}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.5, // Adjust for smoother animation
            }}
          >
            {count} 
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Counter;
