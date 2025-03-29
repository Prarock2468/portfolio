"use client";
import React from "react";
import Styles from "./project.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiArrowCircleUpRightDuotone } from "react-icons/pi";
import projectData from "./project.json";
import Heading from "../../shared/textanimation/heading";
import PageButton from "@/shared/button/button";
import Link from "next/link";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
const ProjectComponent = () => {
  return (
    <>
      <WrapAnimayion>
        <section className={Styles.projectComponent}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className={Styles.projectContainer}
            >
              <div className={Styles.projectHeader}>
                <h2 className={Styles.projectTItle}>
                  <Heading text="Works & Projects" />
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }} // Start off with a vertical offset
                  whileInView={{ opacity: 1, y: 0 }} // Move to original position on view
                  transition={{
                    duration: 0.3,
                    delay: 0.5,
                  }}
                  className={Styles.projectsubtitle}
                >
                  Check out some of my design projects, meticulously crafted
                  with love and dedication.
                </motion.p>
              </div>
              <div className={Styles.projectListWrapper}>
                {projectData.length > 0 ? (
                  projectData.slice(0, 6).map((item, index) => {
                    return (
                      <div key={index} className={Styles.projectCard}>
                        <div className={Styles.projectCardIn}>
                          <div className={Styles.projectImageWrapper}>
                            <Link href={item.liveUrl}
                              target="__blank">
                              <Image
                                src={`/img/referloan/${item.thumbnail}`}
                                alt={`${item.projectName} Thumbnail`}
                                height={167}
                                width={400}
                                className={Styles.projectImage}
                              />
                            </Link>
                          </div>
                          <div className={Styles.projectContent}>
                            <div className={Styles.projectContentLeft}>
                              <h4>{item.projectName}</h4>
                              <p>UI Development</p>
                            </div>
                            <div className={Styles.projectContentRight}>
                              {/* <p className={Styles.Date}>
                              {item.startDate} - {item.endDate}
                            </p> */}
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
                    );
                  })
                ) : (
                  <>
                    <h3>Loding .....</h3>
                  </>
                )}
              </div>
              <div className={Styles.btnWrap}>
                <PageButton targetLink="_self" link="/mywork">
                  <span>See More</span>
                  <PiArrowCircleUpRightDuotone />
                </PageButton>
              </div>
            </motion.div>
          </div>
        </section>
      </WrapAnimayion>
    </>
  );
};
export default ProjectComponent;
