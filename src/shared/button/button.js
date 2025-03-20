import React from "react";
import Styles from "./button.module.scss";
import Link from "next/link";
const PageButton = ({ children, link = "default", targetLink = "_self" }) => {
  return (
    <>
      {link === "default" ? (
        <>
          <div className={`${Styles.bgbtn} ${Styles.customeBtn}`}>
            <div className={`${Styles.bgbtndiv}`}>
              <div className={Styles.bgbtndivP}>
                <div className={`textGradient ${Styles.btnchild}`}>{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            href={link}
            target={targetLink}
            className={`${Styles.bgbtn} ${Styles.customeBtn}`}
          >
            <div className={`${Styles.bgbtndiv}`}>
              <div className={Styles.bgbtndivP}>
                <div className={`textGradient ${Styles.btnchild}`}>{children}</div>
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default PageButton;
