"use client";
import React from "react";
import Styles from "./service.module.scss";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
import MyServices from "./service.json";
import ServiceImage from "../../../public/img/serviceuser.png";
import {
  PiBookOpenUserDuotone,
  PiPaintBucketDuotone,
  PiDeviceMobileDuotone,
  PiSpeedometerDuotone,
  PiLaptopDuotone,
} from "react-icons/pi";
import { SiFirefoxbrowser } from "react-icons/si";
import { LiaAccessibleIcon } from "react-icons/lia";
import { GiFireZone } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import Heading from "@/shared/textanimation/heading";
import Image from "next/image";

// Mapping the icon strings from the JSON to the actual icon components
const iconMap = {
  PiBookOpenUserDuotone: <PiBookOpenUserDuotone />,
  PiDeviceMobileDuotone: <PiDeviceMobileDuotone />,
  PiSpeedometerDuotone: <PiSpeedometerDuotone />,
  PiLaptopDuotone: <PiLaptopDuotone />,
  SiFirefoxbrowser: <SiFirefoxbrowser />,
  LiaAccessibleIcon: <LiaAccessibleIcon />,
  GiFireZone: <GiFireZone />,
  PiPaintBucketDuotone: <PiPaintBucketDuotone />,
  RiCustomerService2Line: <RiCustomerService2Line />,
  MdOutlineSupportAgent: <MdOutlineSupportAgent />,
};

const Service = () => {
  return (
    <>
      <WrapAnimayion>
        <section className={Styles.serviceWrapper}>
          <div
            className={`container shadow ${Styles.br12} ${Styles.servicesContainer}`}
          >
            <div className={Styles.serviceHeader}>
              <h2 className={Styles.servicetTItle}>
                <Heading text="My Services" />
              </h2>
            </div>
            <div className={Styles.serviceCardList}>
              {MyServices.services?.map((item, index) => {
                return (
                  <WrapAnimayion key={index}>
                    <div className={Styles.serviceCard}>
                      <div className={Styles.serviceCardIn}>
                        <div className={Styles.iconWrapper}>
                          {iconMap[item.icon]}
                        </div>
                        <h3 className={Styles.serviceName}>{item.name}</h3>
                        <p className={Styles.serviceText}>{item.description}</p>
                      </div>
                    </div>
                  </WrapAnimayion>
                );
              })}
              <WrapAnimayion>
                <div className={Styles.serviceIamgeWrap}>
                  <Image
                    src={ServiceImage}
                    height={210}
                    width={200}
                    alt="Service icon"
                    className={Styles.serviceImage}
                  />
                </div>
              </WrapAnimayion>
            </div>
          </div>
        </section>
      </WrapAnimayion>
    </>
  );
};

export default Service;
