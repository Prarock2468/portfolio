"use client";
import React, { useState, useEffect } from "react";
import Styles from "./experience.module.scss";
import Data from "./experienceList.json";
import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "../../shared/textanimation/heading";
const Experience = () => {
  // years calculation

  const [experience, setExperience] = useState(0);
  useEffect(() => {
    let totalExperience = 0;
    Data.experience?.forEach((item) => {
      if (typeof item.years === "number") {
        totalExperience += item.years;
      }
    });
    setExperience(parseFloat(totalExperience.toFixed(2)));
  }, [Data.experience]);
  return (
    <div className={Styles.experienceWrap}>
      <div
        className={`${Styles.experienceWrap__titleWrape} ${Styles.gridtitleWrape}`}
      >
        <h2 className={Styles.expTitle}>
           <Heading text="Experience"/>
        </h2>
        <p className={`${Styles.experienceWrap__expeCount}`}>
          <span className={Styles.expeCountBG}>
            <span className='textGradient'>{experience} +  Years</span>
          </span>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        className={Styles.experienceWrap__listWrap}
      >
        {Data.experience?.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              className={Styles.experienceWrap__list}
              initial={{ opacity: 0, y: -10 }} // Start off with a vertical offset
              whileInView={{ opacity: 1, y: -2 }} // Move to original position on view
              transition={{
                duration: 0.3,
                delay: index * 0.2,
              }}
            >
              <span
                className={`${Styles.experienceWrap__dot} ${
                  item.dateOfResign === "Working" &&
                  Styles.experienceWrap__dotActive
                }`}
              ></span>
              <div className={Styles.company}>
                <Link
                  href={item.companyUrl}
                  target="_blank"
                  className={Styles.company__name}
                >
                  {item.companyName}
                </Link>
                <div className={Styles.company__years}>
                  <span
                    className={`${Styles.company__DOJ} ${Styles.experienceWrap__fade}`}
                  >
                    {item.dateOfJoining}
                  </span>
                  -
                  <span
                    className={`${Styles.company__DOR} ${Styles.experienceWrap__fade}`}
                  >
                    {item.dateOfResign}
                  </span>
                </div>
              </div>
              <div className={Styles.designationrapper}>
                <div className={Styles.designation}>
                  <span
                    className={`${Styles.designation__designName} ${Styles.experienceWrap__fade}`}
                  >
                    {item.profile}
                  </span>{" "}
                  -
                  <span
                    className={`${Styles.designation__designType} ${Styles.experienceWrap__fade}`}
                  >
                    {item.jobType}
                  </span>
                </div>
                <span
                    className={`${Styles.designation__designName} ${Styles.experienceWrap__fade}`}
                  >
                    {typeof item.years === "number" ? parseFloat(item.years.toFixed(2)) : item.years} Years
                  </span> 
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
