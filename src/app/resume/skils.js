import React from "react";
import Styles from "./resume.module.scss";
import { PiGraduationCapDuotone } from "react-icons/pi";

const ResumeSkills = () => {
  const skillsData = {
    skills: [
      {
        skillName: "HTML",
        experience: 5.6,
      },
      {
        skillName: "CSS",
        experience: 5.6,
      },
      {
        skillName: "JavaScript",
        experience: 4,
      },
      {
        skillName: "jQuery",
        experience: 4,
      },
      {
        skillName: "React",
        experience: 3,
      },
      {
        skillName: "Next.js",
        experience: 3,
      },
      {
        skillName: "Material UI",
        experience: 2,
      },
      {
        skillName: "Bootstrap",
        experience: 4,
      },
      {
        skillName: "Tailwind",
        experience: 2,
      },
      {
        skillName: "React Bootstrap",
        experience: 3,
      },
      {
        skillName: "Framer Motion",
        experience: 2,
      },
      {
        skillName: "GSAP",
        experience: 1,
      },
      {
        skillName: "Photoshop",
        experience: 3,
      },
      {
        skillName: "PSD to HTML",
        experience: 5.6,
      },
      {
        skillName: "Figma to HTML",
        experience: 5,
      },
    ],
  };

  return (
    <div
      className={` shadow flex flex-col gap-5 items-start p-7 mb-5 rounded-[12px]`}
    >
      <h3 className={`${Styles.title} flex items-center gap-2`}>
        <PiGraduationCapDuotone /> Skills & Experience{" "}
      </h3>
      <div className={Styles.resumeContent}>
        <ul className="grid grid-cols-3 gap-4 ">
          {skillsData.skills.map(({ skillName, experience }, index) => (
            <li key={index} className={`rounded-lg  ${Styles.skillList}`}>
              <p
                className={`p-4 shadow-md flex justify-between items-center rounded-lg ${Styles.skillListIn}`}
              >
                <span className={Styles.SkillsName}>{skillName}</span>
                <span className={Styles.exp}>
                  {experience}
                  <small className={Styles.yearExp}>Years Of Experience</small>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeSkills;
