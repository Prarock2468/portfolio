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
              I'm Pradeep Kumar, a UI developer from Fatehpur, Uttar Pradesh,
              with 5.5 years of experience creating seamless, responsive
              interfaces using clean and efficient code.
            </h1>
            <p className={Styles.aboutSubtitle}>
              As a UI developer, I specialize in building responsive,
              user-friendly interfaces that blend aesthetics with functionality.
              I focus on writing clean, efficient code using the latest
              frameworks and best practices, ensuring seamless performance
              across devices. My goal is to deliver smooth, accessible user
              experiences with pixel-perfect precision.
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
        <Aboutme/>
      </WrapAnimayion>
      <TechSkills/>
      <Kickstart/>
    </>
  );
};

export default About;
