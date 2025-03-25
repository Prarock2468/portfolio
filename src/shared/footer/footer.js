import React from "react";
import Styles from "./footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <div className="container">
          <div
            className={`${Styles.footer__container} flex justify-between gap-5`}
          >
            <p className={`${Styles.copytext} flex gap-2 items-center`}>
              <span style={{color:'#fff'}}>© 2025</span>
              {"   "}
              <Link
                href={"#"}
                className={`${Styles.FooterLink}  inline-block pl-1`}
              >
                Pradeep Kumar
              </Link>
            </p>
            <ul className={`flex gap-4 items-center ${Styles.footerList}`}>
              <li className={Styles.design}>
                Designed with{"  "}
                <Link
                  href={
                    "https://nextjs.org/docs/app/getting-started/installation"
                  }
                  target="_blank"
                  className={Styles.FooterLink}
                >
                  {"  "}
                  <strong> NextJS </strong>
                  {"  "}
                </Link>
                {"  "}
                and{" "}
                <Link
                  href={"https://motion.dev/"}
                  target="_blank"
                  className={Styles.FooterLink}
                >
                  {"  "}
                  <strong> Framer Motion </strong>
                  {"  "}
                </Link>
              </li>
              <li className={`${Styles.uldevider}`}></li>
              <li className="">
                <Link href={"/resume"} className={Styles.FooterLink}>
                  Download Resume
                </Link>
              </li>
              <li className={`${Styles.uldevider}`}></li>
              <li>
                <Link href={"/about"} className={Styles.FooterLink}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
