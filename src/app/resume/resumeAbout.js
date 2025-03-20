import React from "react";
import { LiaUserSecretSolid } from "react-icons/lia";
import Styles from "./resume.module.scss";
const ResumeAbout = () => {
  return (
    <div
      className={` shadow flex gap-5 flex-col items-start p-7 mb-5 rounded-[12px]`}
    >
      <h3 className={`${Styles.title} flex items-center gap-2`}><LiaUserSecretSolid/>  About Me </h3>
      <div className={Styles.resumeContent}>
        <ul className={`flex gap-4 flex-col`}>
          <li className={`${Styles.text_color}`}>
            Hi, I’m Pradeep Kumar, a 30-year-old <strong> UI Developer </strong>{" "}
            specializing in <strong> React, Next.js, HTML, and CSS </strong>.
            With years of experience in frontend development, I excel at
            creating{" "}
            <strong>
              {" "}
              dynamic, responsive, and visually stunning user interfaces{" "}
            </strong>{" "}
            that deliver seamless user experiences. My expertise lies in
            building modern web applications using <strong>
              {" "}
              React{" "}
            </strong> and <strong> Next.js </strong>, ensuring high performance,
            scalability, and SEO-friendliness.
          </li>
          <li className={`${Styles.text_color}`}>
            I have a strong command of{" "}
            <strong>
              HTML5, CSS3, JavaScript, SCSS, SASS React , Next.Js and JavaScript
              Library
            </strong>{" "}
            and modern frontend frameworks like Bootstrap and Material UI,
            enabling me to craft pixel-perfect designs that align with client
            objectives. My proficiency in React allows me to develop interactive
            and dynamic UIs, while Next.js empowers me to build server-side
            rendered applications that are optimized for speed and search engine
            visibility.
          </li>
          <li className={`${Styles.text_color}`}>
            I prioritize{" "}
            <strong>
              {" "}
              Google compatibility | SEO best practices | Accessbility{" "}
            </strong>
            , ensuring that the websites and applications I develop achieve high
            search engine rankings and drive online success. My attention to
            detail, combined with my ability to translate client requirements
            into intuitive and user-friendly interfaces, sets me apart as a
            developer.
          </li>
          <li className={`${Styles.text_color}`}>
            IWhether it’s building a complex web application, optimizing for
            performance, or creating a visually appealing UI, I bring a wealth
            of expertise and a passion for innovation to every project. Let’s
            collaborate to create exceptional digital experiences that leave a
            lasting impact!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeAbout;
