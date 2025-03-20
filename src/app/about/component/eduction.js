import React from "react";
import Styles from "./grid.module.scss";
import Heading from "@/shared/textanimation/heading";
const Eduction = () => {
  return (
    <div className={`${Styles.educationcontainer}`}>
      <h2 className={Styles.animTitle}>
        <Heading text="Education" />
      </h2>
      <div className={Styles.educationWrapper}>
        <div className={Styles.educationCard}>
          <h3 className={Styles.eductype}>BSc Graduate </h3>
          <p className={Styles.collegeName}>
            Amar Shahid Kanchan Singh Degree College Shivpuri, Uttar Pradesh
          </p>
          <span className={Styles.passout}>2013 - 2016</span>
        </div>
        <div className={Styles.educationCard}>
          <h3 className={Styles.eductype}>
            12<sup>th</sup> Mathmatic{" "}
          </h3>
          <p className={Styles.collegeName}>
            Anglo Bengali Inter College in Allahabad, Uttar Pradesh
          </p>
          <span className={Styles.passout}>2011 - 2013</span>
        </div>
        <div className={Styles.educationCard}>
          <h3 className={Styles.eductype}>
            10<sup>th</sup> Science{" "}
          </h3>
          <p className={Styles.collegeName}>
            Mother Suhag Inter College in Fatehpur, Uttar Pradesh
          </p>
          <span className={Styles.passout}>2010 - 2011</span>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
