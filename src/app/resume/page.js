import React from "react";
import Styles from "./resume.module.scss";
import ResumeSkills from "./skils";
import ResumeAbout from "./resumeAbout";
import CompanyExperience from "./companyExperience";
import EducationResume from "./education";
import Mydetail from "./mydetail";
import ResumeImage from "../../../public/img/resume1.jpg";
import { IoDownload } from "react-icons/io5";
import Link from "next/link";
import { GiHomeGarage } from "react-icons/gi";
import PageButton from "@/shared/button/button";

const Resume = () => {
  return (
    <section className={Styles.resumePage}>
      <div className={Styles.stickeyHeader}>
        <div className="container">
          <div className={Styles.headerWrapper}>
            <div
              className={`${Styles.headerWrapperIn} flex justify-end items-center gap-5  `}
            >
              <PageButton link="/">
                <GiHomeGarage />
                <span>Home</span>
              </PageButton>

              <a
                href={ResumeImage.src}
                download="resume.jpg"
                className={`${Styles.whatsbtn}`}
              >
                <p className={Styles.whatsbtnp}>
                  <IoDownload />
                  <span> Download Resume</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Rcontainer}>
        <div className="container ">
          <div className="shadow p-7 mb-5 rounded-[12px]">
            <div className={`flex items-start justify-between ${Styles.detailWrapper}`}>
              <Mydetail />
              <div>
                <EducationResume />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ResumeAbout />
        </div>

        <div className="container">
          <ResumeSkills />
        </div>
        <div className="container">
          <CompanyExperience />
        </div>
      </div>
    </section>
  );
};

export default Resume;
