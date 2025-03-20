import React from "react";
import Styles from "./resume.module.scss";
import ResumeSkills from "./skils";
import ResumeAbout from "./resumeAbout";
import CompanyExperience from "./companyExperience";
import EducationResume from "./education";
import Mydetail from "./mydetail";
import Link from "next/link";
import ResumeImage from '../../../public/img/resume1.jpg'
const Resume = () => {
  return (
    <section className={Styles.resumePage}>
      <div>
      <Link href={ResumeImage} download="resume1.jpg">
        Download Image
      </Link>
      </div>
      <div className={Styles.Rcontainer}>
        <div className="container ">
          <div className="shadow p-7 mb-5 rounded-[12px]">
            <div className={`flex items-start gap-9 justify-between`}>
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
