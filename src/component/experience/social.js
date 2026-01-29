"use client";
import React from "react";
import Styles from "./experience.module.scss";
import { motion } from "framer-motion";
import { FaLinkedin ,FaSkype} from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


import Link from "next/link";
import Heading from "../../shared/textanimation/heading";
import { PiHandshakeDuotone } from "react-icons/pi";
let text = "Connect";
const Social = () => {
  return (
    <div className={Styles.skillWrap}>
      <div
        className={`${Styles.skillWrap__titleWrape} ${Styles.gridtitleWrape} `}
      >
        <h2 className={Styles.expTitle}>
          <Heading text="Connect with me" />
        </h2>
        <ul className={Styles.socialList}>
          <li className={Styles.listSo}>
            <Link href="www.linkedin.com/in/pradeepkumar2917" target="__blank">
              {" "}
              <FaLinkedin /> <span>LinkedIn</span>
            </Link>
          </li>
          <li className={Styles.listSo}>
            <Link href={"mailto:frontend2917@gmail.com"} target="__blank">
              {" "}
              <IoIosMailOpen /> <span> Primary Mail</span>
            </Link>
          </li>
          <li className={Styles.listSo}>
            <Link href={"mailto:prarock2468@gmail.com"} target="__blank">
              {" "}
              <IoIosMailOpen /> <span>Secondary Mail</span>
            </Link>
          </li>
          <li className={Styles.listSo}>
            <Link href={"tel:9935990927"} target="__blank">
              {" "}
              <MdWifiCalling3 /> <span>9935990927</span>
            </Link>
          </li>
          <li className={Styles.listSo}>
            <Link href={"tel:6388992930"} target="__blank">
              {" "}
              <BsFillPhoneVibrateFill /> <span>6388992930</span>
            </Link>
          </li>
          <li className={Styles.listSo}>
            <Link href={"https://wa.me/919935990927"} target="__blank">
              {" "}
              <IoLogoWhatsapp /> <span>Whatsapp</span>
            </Link>
          </li>
          {/* <li className={Styles.listSo}>
            <Link
              href={"https://join.skype.com/invite/twGLGEOE0o5W"}
              target="__blank"
            >
              {" "}
              <FaSkype /> <span>Join me on Skype</span>
            </Link>
          </li> */}
        </ul>
        <div className={Styles.meetWraper}>
          <div className={Styles.meetWraperin}>
            <div className={Styles.meetWraperIcon}>
              <PiHandshakeDuotone />
            </div>
            <div className={Styles.meetWraperContent}>
              <span className={Styles.meetWraperText}>
                Let's Work Together!
              </span>
              <span
                className={`${Styles.meetWraperText} ${Styles.meetWraperTextLink}`}
              >
                Send Email →{" "}
                <Link
                  href={"mailto:prarock2468@gmail.com"}
                  className={Styles.meetMail}
                >
                  prarock2468@gmail.com
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
