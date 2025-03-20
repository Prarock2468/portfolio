// components/SkillProgressBar.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Styles from "./grid.module.scss";
import Counter from "@/shared/counter/counter";
const SkillProgressBar = ({ skill, percent, experience }) => {
  // Use the hook from 'react-intersection-observer' to track visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.1, // When 10% of the component is visible
  });

  return (
    <div ref={ref} className={Styles.skillContainer}>
      <div className={Styles.techtop}>
        <h2 className={Styles.techTitle}>{skill}</h2>
        <div className={Styles.techExp}>
          (
          <div className={`flex gap-1 font-bold ${Styles.years}`}>
            <Counter number={experience} />+
          </div>{" "}
          Years of Experience )
        </div>
      </div>
      <div className={Styles.progressBar}>
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: inView ? `${percent - 4}%` : 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          className={Styles.tooltip}
        >
          {percent}%
        </motion.div>
        <motion.div
          className={Styles.fillBar}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percent}%` : 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;
