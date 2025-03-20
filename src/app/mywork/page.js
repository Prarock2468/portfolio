"use client";
import React from "react";
import Styles from "./work.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import projectData from "@/component/project/project.json";
import Link from "next/link";
import Heading from "@/shared/textanimation/heading";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";

const Work = () => {
  {
    console.log(projectData);
  }
  return (
    <>
      {/* <ProjectBanner /> */}
      <div className="container">
        <div className={Styles.projectHeader}>
          <h2 className={Styles.projectTItle}>
            <Heading text="Works & Projects" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }} // Start off with a vertical offset
            whileInView={{ opacity: 1, y: -2 }} // Move to original position on view
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
            className={Styles.projectsubtitle}
          >
            Check out some of my design projects, meticulously crafted with love
            and dedication.
          </motion.p>
        </div>
      </div>
      <div className="container mt-5">
        <div
          className={`${Styles.myWorkWrapper} flex flex-col gap-5 justify-center`}
        >
          {projectData.length > 0 ? (
            projectData.map((item, index) => {
              return (
                <WrapAnimayion>
                  <div
                    key={index}
                    className={`${Styles.myWorkWrapperCard} shadow rounded-lg`}
                  >
                    <div
                      className={`${Styles.myWorkWrapperCardIn} flex gap-4 items-start p-5 rounded-lg`}
                    >
                      <div className={Styles.myWorkWrapperImg}>
                        <Image
                          src={`/img/referloan/${item.thumbnail}`}
                          alt={`${item.projectName} Thumbnail`}
                          height={400}
                          width={400}
                          className={Styles.projectImage}
                        />
                      </div>
                      <div className={Styles.myWorkWrapperContent}>
                        <div className={Styles.projectContentLeft}>
                          <h4>{item.projectName}</h4>
                          <p>UI Development</p>
                        </div>

                        <div className={Styles.projectContentRight}>
                          <p className={Styles.text_color}>{item.description}</p>
                          <ul className="list-none pl-0 flex gap-x-1 flex-wrap">
                            {item.skills?.map((skill, index) => (
                              <li
                                key={index}
                                className={`${Styles.text_color} ${Styles.skilsList} hover:text-white cursor-pointer`}
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={item.liveUrl}
                            className="textGradient hoverlink"
                            target="__blank"
                            aria-label={item.projectName}
                          >
                            Go Live
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </WrapAnimayion>
              );
            })
          ) : (
            <>
              <h3>Loding .....</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Work;
