"use client";
import React from "react";
import Styles from "./about.module.scss";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
import Aboutus from "../../../public/img/olduserIcon.png";
import AboutImage from "../../../public/img/aboutme.png";
import Image from "next/image";
import AboutGrid from "./component/aboutGrid";
import TechSkills from "./component/skills";
import Kickstart from "@/shared/kickstart/kickstart";
import Aboutme from "./component/aboutme";
const About = () => {
  return (
    <>
      <div className="container">
        <WrapAnimayion>
          <div className={Styles.aboutWrapper}>
            <Image
              src={Aboutus}
              alt="about me image"
              height={150}
              width={150}
              className={Styles.aboutmeImge}
            />
            <h1 className={Styles.aboutTitle}>
              I’m <strong> Pradeep Kumar</strong>, a{" "}
              <strong> UI & Frontend Developer</strong> from Noida, Uttar
              Pradesh, with <strong>6.9 years of professional</strong>  experience building
              modern, responsive, and high-performance web applications.
            </h1>
            <p className={Styles.aboutSubtitle}>
              I specialize in designing and developing{" "}
              <strong> pixel-perfect </strong>user interfaces using{" "}
              <strong>HTML, CSS, JavaScript, React,</strong> and{" "}
              <strong> Next.js </strong>. I work extensively on{" "}
              <strong> API integration </strong>, connecting frontend
              applications with REST APIs to build dynamic, data-driven
              experiences that are fast, scalable, and user-friendly. With a
              strong focus on
              <strong>
                {" "}
                UI consistency, accessibility, SEO optimization, and
                performance,
              </strong>{" "}
              I transform design concepts into clean, maintainable code that
              works seamlessly across devices and browsers. Whether it’s a
              freelance project, startup product, or enterprise application, my
              goal is to deliver{" "}
              <strong>
                {" "}
                intuitive interfaces that look great and perform flawlessly.
              </strong>
            </p>
          </div>
        </WrapAnimayion>
        <WrapAnimayion>
          <div className={`${Styles.AboutImage} shadow`}>
            <Image
              src={AboutImage}
              height={450}
              width={1400}
              alt="about image"
            />
          </div>
        </WrapAnimayion>
        <WrapAnimayion>
          <div className={Styles.textContainer}>
            <h3 className={Styles.aboutsecondtitle}>
              I began my career in December 2019 as a web designer at Vdesk
              Solution Pvt Ltd. During my time there, I deepened my
              understanding of web design and UI development, exploring both the
              creative and technical aspects of building user-friendly
              interfaces. I also gained experience in coding and improving user
              experience, which has fueled my passion for creating visually
              appealing and functional web designs ever since.
            </h3>
            <p className={Styles.aboutSubtitle}>
              I do more than just coding – I've worked on crafting intuitive
              interfaces and enjoy enhancing user interactions. When I'm not
              busy developing, you'll find me exploring new design trends,
              optimizing performance, or collaborating on creative projects. In
              my free time, I enjoy learning new tech, playing around with
              design tools, and staying active with sports like badminton.
            </p>
          </div>
        </WrapAnimayion>
      </div>

      <AboutGrid />
      <WrapAnimayion>
        <Aboutme />
      </WrapAnimayion>
      <TechSkills />
      <Kickstart />
    </>
  );
};

export default About;
