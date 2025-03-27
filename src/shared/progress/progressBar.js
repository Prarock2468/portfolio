"use client";
import { useEffect, useState } from "react";
import Styles from "./progress.module.scss";
import { MdKeyboardArrowUp } from "react-icons/md";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate scroll progress as a percentage
      const progress = (scrollPosition / scrollHeight) * 100;
      setScrollProgress(progress);

      // Toggle class based on scroll position
      setIsScrolled(scrollPosition >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <div
      className={`${Styles.scrlTop} ${isScrolled ? Styles.active : ""}`}
      onClick={scrollToTop} // Scroll to top on click
    >
      <MdKeyboardArrowUp className={Styles.arrowTop} />
      <div
        className={Styles.progressBar}
        style={{ transform: `scaleX(${scrollProgress / 100})` }} // Smooth width animation
      ></div>

      {/* Waves adjust based on progress */}
      <div
        className={Styles.wave_01}
        style={{ top: `${50 - scrollProgress * 0.3}%` }}
      ></div>
      <div
        className={Styles.wave_02}
        style={{ top: `${55 - scrollProgress * 0.25}%` }}
      ></div>
      <div
        className={Styles.wave_03}
        style={{ top: `${60 - scrollProgress * 0.2}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
