"use client";
import React from "react";
import Styles from "./work.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import projectData from "@/component/project/project.json";
import Link from "next/link";
import Heading from "@/shared/textanimation/heading";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
import { PiShareFatDuotone } from "react-icons/pi";
import ProjectBanner from "./banner";
const Work = () => {
  
  return (
    <>
      <ProjectBanner />
      <div className="container mt-5" style={{marginBottom:'40px !important'}}>
        <div className={`${Styles.myWorkWrapper}`}>
          {projectData.length > 0 ? (
            projectData.map((item, index) => {
              return (
                <WrapAnimayion key={index}>
                  <div className={`${Styles.myWorkWrapperCard}  rounded-lg`}>
                    <div
                      className={`${Styles.myWorkWrapperCardIn} flex flex-col gap-5 items-start p-5 rounded-lg `}
                    >
                      <div className={Styles.myWorkWrapperImg}>
                        <Image
                          src={`/img/referloan/${item.thumbnail}`}
                          alt={`${item.projectName} Thumbnail`}
                          height={500}
                          width={500}
                          className={Styles.projectImage}
                        />
                      </div>
                      <div className={Styles.myWorkWrapperContent}>
                        <div className="flex justify-between items-start">
                          <div className={Styles.projectContentLeft}>
                            <h4>{item.projectName}</h4>
                            <p>UI Development</p>
                          </div>
                          <Link
                            href={item.liveUrl}
                            className={`textGradient hoverlink flex gap-1 items-center ${Styles.links}`}
                            target="__blank"
                            aria-label={item.projectName}
                          >
                            <PiShareFatDuotone
                              size={13}
                              style={{ color: "#ffd89d" }}
                            />{" "}
                            Go Live
                          </Link>
                        </div>
                        <p className={`${Styles.text_color}`}>
                          {item.description}
                        </p>
                        <div className={Styles.projectContentRight}>
                          <ul className="list-none pl-0 flex gap-1 flex-wrap mt-3">
                            {item.skills?.map((skill, index) => (
                              <li
                                key={index}
                                className={`${Styles.text_color} ${Styles.skilsList} border capitalize border-gray-600 rounded-[5px] bg-gray-600/10 px-2 py-1 hover:text-white cursor-pointer`}
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
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
