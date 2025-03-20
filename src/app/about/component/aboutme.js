import React from "react";
import Styles from '../about.module.scss'
import Experience from "@/component/experience/experience";
import Counter from "@/shared/counter/counter";
const Aboutme = () => {
  return (
    <div className="container">
      <div className={Styles.pageGrid}>
        <div className={`shadow ${Styles.pageExp} ${Styles.pageCol}`}>
          <div className={Styles.pagecalpadding}>
            <Experience />
          </div>
        </div>
        <div className={`shadow ${Styles.pageyears} ${Styles.pageCol}`}>
          <div className={` ${Styles.pagecalpadding}`}>
            <div className={Styles.yrsContant}>
              <h2 className={Styles.counterNumber}>
                <Counter number={5} /> +
              </h2>
              <h4 className={Styles.pageColTitleyears}>Years of experience</h4>
            </div>
            <p className={Styles.yearText}>
              As a UI developer, I create responsive, user-friendly interfaces
              with clean, efficient code. Using modern frameworks, I ensure
              seamless performance and deliver pixel-perfect, accessible user
              experiences across all devices.
            </p>
          </div>
        </div>
        <div className={`shadow ${Styles.pageproejct} ${Styles.pageCol}`}>
          <div className={`${Styles.pagecalpadding}`}>
            <h2 className={Styles.counterNumber}>
              <Counter number={70} /> +
            </h2>
            <h4 className={Styles.pageColTitle}>Projects Done</h4>
          </div>
        </div>
        <div className={`shadow ${Styles.pageclient} ${Styles.pageCol}`}>
          <div className={`${Styles.pagecalpadding}`}>
            <h2 className={Styles.counterNumber}>
              <Counter number={48} /> +
            </h2>
            <h4 className={Styles.pageColTitle}>Happy Review</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
