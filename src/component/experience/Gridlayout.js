import React from "react";
import Styles from "./experience.module.scss";
import Experience from "./experience";
import Tools from "./tools";
import Skills from "./skills";
import Social from "./social";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
const ExperienceGrid = () => {
  return (
   <>
    <WrapAnimayion >
      <div className={Styles.experienceW_Grid}>
        <div className="container">
          <div className={Styles.grids}>
            <div className={`${Styles.grids__col} ${Styles.grids__col1}`}>
              <div
                className={`${Styles.grids__wrapper} ${Styles.grids__wrappercolor}`}
              >
                <Experience />
              </div>
            </div>
            <div className={`${Styles.grids__col} ${Styles.grids__col2}`}>
              <div
                className={`${Styles.grids__wrapper} ${Styles.grids__wrappercolor}`}
              >
                <Skills />
              </div>
            </div>

            <div className={`${Styles.grids__col} ${Styles.grids__col3}`}>
              <div
                className={`${Styles.grids__wrapper} ${Styles.grids__wrappercolor}`}
              >
                <Social />
              </div>
            </div>
            <div className={`${Styles.grids__col} ${Styles.grids__col4}`}>
              <div
                className={`${Styles.grids__wrapper} ${Styles.grids__wrappercolor}`}
              >
                <Tools />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapAnimayion>
   </>
  );
};

export default ExperienceGrid;
