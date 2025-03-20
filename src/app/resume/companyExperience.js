import React from "react";
import Styles from "./resume.module.scss";
import Link from "next/link";
import { GrStarOutline } from "react-icons/gr";
import { GiJourney } from "react-icons/gi";

const CompanyExperience = () => {
  const experienceData = {
    experiences: [
      {
        company: "Vdesks Solution",
        companyUrl: "https://vdesks.com/",
        duration: "Nov/2019 – Feb/2022",
        description: [
          "Converted PSD and Figma designs into HTML5 code, ensuring pixel-perfect accuracy and responsiveness.",
          "Implemented semantic HTML elements to enhance accessibility and search engine optimization (SEO).",
          "Utilized CSS3 and JavaScript to create engaging and interactive user interfaces.",
          "Collaborated with designers and back-end developers to integrate front-end code with back-end systems.",
          "Conducted thorough browser compatibility testing to ensure consistent performance across different browsers and devices.",
          "Contributed to the development of CMS-driven websites using platforms like Sitefinity and Umbraco.",
        ],
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "Angular UI Development",
          "Sitefinity (CMS)",
          "Pixel-perfect Design Implementation",
          "Responsive Design",
          "Semantic HTML Elements",
          "Browser Compatibility Testing",
          "Flex Boxes",
          "Figma To HTML5",
          "PSD To HTML5",
        ],
        projects: [
          "https://www.sargamrestaurant.com",
          "https://4cherrylimos.com",
          "http://patientsoul.com",
          "https://www.crayvalley.com",
          "https://www.asyad.om",
        ],
      },
      {
        company: "Himflax Information",
        companyUrl: "https://himflax.com/",
        duration: "Mar/2022 – Dec/2022",
        description: [
          "Converted PSD and Figma designs into HTML5 code, ensuring pixel-perfect accuracy and responsiveness.",
          "Implemented semantic HTML elements to enhance accessibility and search engine optimization (SEO).",
          "Utilized CSS3 and JavaScript to create engaging and interactive user interfaces.",
          "Collaborated with designers and back-end developers to integrate front-end code with back-end systems.",
          "Conducted thorough browser compatibility testing to ensure consistent performance across different browsers and devices.",
          "Contributed to the development of CMS-driven websites using platforms like WordPress.",
        ],
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "ES6",
          "jQuery",
          "Bootstrap",
          "React",
          "Next JS",
          "Pixel-perfect Design Implementation",
          "Responsive Design",
          "Semantic HTML Elements",
          "Browser Compatibility Testing",
          "Flex Boxes",
          "Figma To HTML5",
          "PSD To HTML5",
        ],
        projects: [
          "https://himflax.com",
          "https://wizehire.com",
          "https://www.royallstays.com",
          "https://www.astracarservices.com",
        ],
      },
      {
        company: "Referloan PVT Ltd",
        companyUrl: "https://referloan.in/",
        duration: "Dec/2022 – June/2024",
        description: [
          "Front-End Developer | React & NextJS UI Developer with a strong background in Fintech.",
          "Expert in HTML5, CSS3, and JavaScript ES6, adept at crafting pixel-perfect, responsive designs.",
          "Proficient in React, Next.js, Redux, and Context API for building dynamic user interfaces.",
          "Skilled in team management, ensuring high-quality deliverables, and fostering collaboration.",
        ],
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript ES6",
          "TypeScript",
          "jQuery",
          "Bootstrap",
          "Tailwind CSS",
          "Material UI",
          "React",
          "Next.js",
          "Jade",
          "Express",
          "Pixel-perfect Design",
          "Responsive Design",
          "Semantic HTML",
          "Flex Boxes",
          "Figma To HTML5",
          "PSD To HTML5",
        ],
        projects: [
          "https://www.hynolig.com",
          "https://referloan.in",
          "https://partners.referloan.in/login",
        ],
      },
      {
        company: "Ith Technology PVT Ltd",
        companyUrl: "https://ith.tech/",
        duration: "July/2024 - Working",
        description: [
          "Front-End Developer | React & NextJS UI Developer with a strong background in Fintech.",
          "Expert in HTML5, CSS3, and JavaScript ES6, adept at crafting pixel-perfect, responsive designs.",
          "Proficient in React, Next.js, Redux, and Context API for building dynamic user interfaces.",
          "Skilled in team management, ensuring high-quality deliverables, and fostering collaboration.",
        ],
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript ES6",
          "jQuery",
          "Bootstrap",
          "Tailwind CSS",
          "Framer Motion",
          "React",
          "Next.js",
          "Pixel-perfect Design",
          "Responsive Design",
          "Semantic HTML",
          "Flex Boxes",
          "Figma To HTML5",
          "PSD To HTML5",
        ],
        projects: [
          "https://tde.fi/republic-cohort",
          "https://tde.fi",
          "https://pms.recru.in",
          "https://coinbuck.com",
          "https://tdx.biz",
          "https://bizthonpbw.com",
          "https://bizthon.com",
          "https://web-xyz.bizthon.com/idea",
          "https://bizthon.com/PBW-hackathon-2025-online-XRPL-commons-track.html",
        ],
      },
    ],
  };

  return (
    <div
      className={` shadow flex flex-col gap-5 items-start p-7 mb-5 rounded-[12px]`}
    >
      <h3 className={`${Styles.title} flex items-end gap-4  w-full`}>
        <GiJourney size={40}  />{" "}
        <span>My Journey </span>
      </h3>
      <div className={Styles.resumeContent}>
        {experienceData.experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <div className={`mb-9  ${Styles.companyHeader}`}>
              <div
                className={`flex justify-between items-center gap-3 px-4 py-3  ${Styles.companyHeaderIn}`}
              >
                <h2 className={Styles.companyName}>
                  <Link
                    href={experience.companyUrl}
                    target="_blank"
                    className={Styles.CpmLink}
                  >
                    {experience.company}
                  </Link>
                </h2>
                <p className={Styles.duration}>{experience.duration}</p>
              </div>
            </div>
            <div className="relative">
              <div className={`absolute ${Styles.divi}`}></div>
              <div className="flex gap-2 pt-2 pl-1">
                <div className={Styles.leftBox}>
                  <h4
                    className={`${Styles.SkillsName} ${Styles.dots} relative`}
                  >
                    Responsbility{" "}
                  </h4>
                </div>
                <div className={Styles.rightBox}>
                  <ul className="list-none pl-8 flex flex-col gap-2">
                    {experience.description.map((desc, i) => (
                      <li
                        className={`${Styles.text_color} flex gap-4 items-start`}
                        key={i}
                      >
                        <GrStarOutline size={15} className="mt-[7px] w-4" />{" "}
                        <span
                          className={Styles.text}
                          style={{ width: "calc(100% - 12px)" }}
                        >
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 my-8 pt-2 pl-1">
                <div className={Styles.leftBox}>
                  <h4
                    className={`${Styles.SkillsName} ${Styles.dots} relative`}
                  >
                    Skills{" "}
                  </h4>
                </div>
                <div className={Styles.rightBox}>
                  <ul className="list-none pl-7 flex gap-x-3 flex-wrap">
                    {experience.skills?.map((skill, index) => (
                      <li
                        key={index}
                        className={`${Styles.text_color} ${Styles.skilsList} hover:text-white cursor-pointer`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 pt-2 pl-1">
                <div className={Styles.leftBox}>
                  <h4
                    className={`${Styles.SkillsName} ${Styles.dots} relative`}
                  >
                    Projects{" "}
                  </h4>
                </div>
                <div className={Styles.rightBox}>
                  <ul className="list-none flex flex-col gap-4 pl-8">
                    {experience.projects.map((project, i) => (
                      <li key={i}>
                        <a
                          href={project}
                          target="_blank"
                          className={`${Styles.text_color} max-w-max flex items-center gap-2 hover:underline hover:text-white cursor-pointer`}
                        >
                          <GrStarOutline size={15} />{" "}
                          <span className={Styles.text}>{project}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyExperience;
