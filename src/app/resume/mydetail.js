import React from "react";
import Image from "next/image";
import Styles from "./resume.module.scss";
import MyImage from "@/../../public/img/resume.png";
import Link from "next/link";
import { IoIosMailUnread } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
const Mydetail = () => {
  return (
    <div className={`${Styles.nameDetailWrapp}  `}>
      <div className={Styles.ResumeImage}>
        <Image src={MyImage} alt="my image " height={150} width={150} />
      </div>
      <div className={`flex flex-col w-full`}>
        <div className={Styles.resumeHeader}>
          <h1>Pradeep Kumar</h1>
          <p className={` ${Styles.text_color} ${Styles.font25}`}>
            UI/UX & Frontend Developer in Noida India.
          </p>
        </div>

        <ul className={`flex items-start ${Styles.contactList}`}>
          <li>
            <Link
              href={"tel:+919935990927"}
              target="_blank"
              className={`${Styles.Resumesocial} ${Styles.socalName} flex gap-2 items-center`}
            >
              <span className="">
                <PiPhoneCallFill size={15} style={{color:'#fff'}}/>
              </span>
              <span className={Styles.text_color}>+919935990927</span>
            </Link>
          </li>
          <li>
            <Link
              href={"mailto:prarock2468@gmail.com"}
              target="_blank"
              className={`${Styles.Resumesocial1} ${Styles.socalName} flex gap-2 items-center  border-l-2 border-[#ffffff92] border-r-2`}
            >
              <span className="">
                <IoIosMailUnread size={15} style={{color:'#fff'}}/>
              </span>
              <span className={Styles.text_color}>frontend2917@gmail.com</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/prarock2468/"
              target="_blank"
              className={`${Styles.Resumesocial} ${Styles.socalName} flex gap-2 items-center`}
            >
              <span className="">
                <IoLogoLinkedin size={15} style={{color:'#fff'}} />
              </span>
              <span className={Styles.text_color}>Linkedin</span>
            </Link>
          </li>
        </ul>
        <p className={` ${Styles.text_color} ${Styles.font25}`}>
          {`( 6.9 Years Of Experience  )`}
        </p>
      </div>
    </div>
  );
};

export default Mydetail;
