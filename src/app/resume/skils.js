import React from "react";
import Styles from "./resume.module.scss";
import { PiGraduationCapDuotone } from "react-icons/pi";
import Image from "next/image";
const ResumeSkills = () => {
  const skillsData = {
    skills: [
      {
        skillName: "HTML",
        experience: 6.8,
        icon: "html.webp",
        Iconclass: "html",
      },
      {
        skillName: "CSS",
        experience: 6.8,
        icon: "css.webp",
        Iconclass: "css",
      },
      {
        skillName: "JavaScript",
        experience: 5,
        icon: "js.png",
        Iconclass: "js",
      },
      {
        skillName: "jQuery",
        experience: 4,
        icon: "jq.png",
        Iconclass: "jq",
      },
      {
        skillName: "React",
        experience: 4,
        icon: "react.webp",
        Iconclass: "react",
      },
      {
        skillName: "Next.js",
        experience: 4,
        icon: "nextjs.webp",
        Iconclass: "nextjs",
      },
      {
        skillName: "Material UI",
        experience: 3,
        icon: "mui.webp",
        Iconclass: "mui",
      },
      {
        skillName: "Bootstrap",
        experience: 5,
        icon: "bs-icon.png",
        Iconclass: "bootstrap",
      },
      {
        skillName: "Tailwind",
        experience: 2,
        icon: "tailwind.webp",
        Iconclass: "tailwind",
      },
      {
        skillName: "React Bootstrap",
        experience: 4,
        icon: "react.webp",
        Iconclass: "react",
      },
      {
        skillName: "Framer Motion",
        experience: 3,
        icon: "famer.png",
        Iconclass: "framer",
      },
      {
        skillName: "GSAP",
        experience: 2,
        icon: "gsap.jpg",
        Iconclass: "gsap",
      },
      {
        skillName: "Photoshop",
        experience: 3,
        icon: "ps-icon.png",
        Iconclass: "photo",
      },
      {
        skillName: "PSD to HTML",
        experience: 5.6,
        icon: "ps-icon.png",
        Iconclass: "PH",
      },
      {
        skillName: "Figma to HTML",
        experience: 5,
        icon: "figma.png",
        Iconclass: "fh",
      },
    ],
  };

  const path = "/img/skillLogo";

  return (
    <div
      className={` shadow flex flex-col gap-5 items-start p-7 mb-5 rounded-[12px]`}
    >
      <h3 className={`${Styles.title} flex items-center gap-2`}>
        <PiGraduationCapDuotone /> Skills & Experience{" "}
      </h3>
      <div className={Styles.resumeContent}>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.skills.map(
            ({ skillName, experience, icon, Iconclass }, index) => (
              <li key={index} className={`rounded-lg  ${Styles.skillList}`}>
                <div
                  className={`p-4 shadow-md flex justify-between items-center rounded-lg ${Styles.skillListIn}`}
                >
                  <div className="flex items-center gap-1">
                    <div
                      className={`${Styles.SkillIcon}  ${Styles[Iconclass]}`}
                    >
                      <Image
                        src={`${path}/${icon}`}
                        alt={Iconclass}
                        height={30}
                        width={30}
                      />
                    </div>
                    <span className={Styles.SkillsName}>{skillName}</span>
                  </div>
                  <span className={Styles.exp}>
                    {experience}
                    <small className={Styles.yearExp}>
                      Years Of Experience
                    </small>
                  </span>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResumeSkills;
