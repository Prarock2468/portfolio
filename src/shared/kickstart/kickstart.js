import React from "react";
import Styles from "./kickstart.module.scss";
import Image from "next/image";
import MyImage from "../../../public/img/pixels.png";
import PageButton from "../button/button";
import { GiBugleCall } from "react-icons/gi";
import WrapAnimayion from "../wrapAnimayion/wrapAnimayion";

const Kickstart = () => {
  return (
    <WrapAnimayion>
      <div className="container">
        <div className={Styles.kickContainer}>
          <div className={Styles.kickContainerLeft}>
            <Image
              src={MyImage}
              alt="kick start image"
              height={240}
              width={450}
            />
          </div>
          <div className={Styles.kickContainerright}>
            <h2 className={Styles.kickTitle}>
              Ready to kickstart your project with a touch of magic?{" "}
            </h2>
            <p className={Styles.kickText}>
              <span>Reach out and let's make it happen ✨. </span> I'm also
              available for full-time or Part-time opportunities to push the
              boundaries of design and deliver exceptional work.
            </p>
            <PageButton link={"https://wa.me/919935990927"} targetLink="_blank">
              <span>Let's Talk </span>
              <GiBugleCall />
            </PageButton>
          </div>
        </div>
      </div>
    </WrapAnimayion>
  );
};

export default Kickstart;
