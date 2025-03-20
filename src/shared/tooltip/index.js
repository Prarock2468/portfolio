import React, { useState } from "react";
import styles from "./tooltip.module.scss"; // Custom CSS file for styling

const MyTooltip = ({
  children,
  content,
  position = "top",
  width = "120px",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={styles["tooltip-container"]}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children} {/* The element that triggers the tooltip */}
      {isVisible && (
        <div
          className={`${styles["tooltip-box"]} ${
            styles[`tooltip-${position}`]
          }`}
          style={{ width: width }}
        >
          {content} {/* The tooltip content */}
          <div
            className={`${styles["tooltip-arrow"]} ${
              styles[`tooltip-arrow-${position}`]
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default MyTooltip;
