"useclient";
import React from "react";
import techData from "./skills.json";
import WrapAnimayion from "@/shared/wrapAnimayion/wrapAnimayion";
import Heading from "@/shared/textanimation/heading";
import Styles from "./grid.module.scss";
import SkillProgressBar from "./progressbar";

const TechSkills = () => {
  return (
    <WrapAnimayion>
      <div className={`container shadow ${Styles.techSkillContainer}`}>
        <h1 className={Styles.animTitle}>
          <Heading text={"Skills and Experience"} />
        </h1>
        <ul className={`grid sm:grid-cols-2 ${Styles.gap10}`}>
          {techData.tech.map((tech, index) => (
            <li key={index} className={Styles.esxpeienceCard}>
              <SkillProgressBar
                skill={tech.techName.toUpperCase()}
                percent={tech.rating}
                experience={tech.experience}
              />
            </li>
          ))}
        </ul>
      </div>
    </WrapAnimayion>
  );
};

export default TechSkills;
