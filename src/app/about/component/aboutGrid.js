import React from "react";
import Styles from "./grid.module.scss";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
import Heading from "@/shared/textanimation/heading";
import ResumeIcon from "../../../../public/img/resume.avif";
import Image from "next/image";
import PageButton from "@/shared/button/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Social from "@/component/experience/social";
import Eduction from "./eduction";

const AboutGrid = () => {
  return (
    <WrapAnimayion>
      <section className={Styles.GridWrapper}>
        <div className="container">
          <div className={` ${Styles.GridContainer}`}>
            <div className={`shadow ${Styles.GridCol} ${Styles.GridCol1}`}>
              <div className={Styles.shadowConainer}>

                <Eduction/>
              </div>
            </div>
            <div className={`shadow ${Styles.GridCol} ${Styles.GridCol2}`}>
              <div className={Styles.shadowConainer}>
                <Social />
              </div>
            </div>
            <div className={` shadow ${Styles.GridCol} ${Styles.GridCol3}`}>
              <div className={Styles.shadowConainer}>
                <h2 className={Styles.animTitle}>
                  <Heading text="Resume" />
                </h2>
                <div className={`${Styles.resumeWrapper}`}>
                  <Image
                    src={ResumeIcon}
                    height={249}
                    width={220}
                    alt="Download Resume"
                  />
                  <PageButton>
                    <span>Download Resume</span>
                    <IoIosArrowRoundForward />
                  </PageButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WrapAnimayion>
  );
};

export default AboutGrid;
