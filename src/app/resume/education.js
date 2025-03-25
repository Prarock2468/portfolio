// pages/index.js
import Styles from "./resume.module.scss";
const EducationResume = () => {
  const educationData = {
    Education: [
      {
        Level: "High School",
        Institution: "MSIC Fatehpur",
        Year: "2011",
      },
      {
        Level: "Intermediate",
        Institution: "ABIC Civil Line Allahabad",
        Year: "2013",
      },
      {
        Level: "Graduation",
        Degree: "B.Sc (Math)",
        Institution: "CSJMU Kanpur",
        Year: "2016",
      },
    ],
  };

  return (
    <div className={Styles.educationWrapper}>
      <h2 className={`text-[#fff] ${Styles.edutitle}`}>Education </h2>
      <ul>
        {educationData.Education.map((edu, index) => (
          <li key={index} className={`${Styles.text_color} ${Styles.text_edu}`}>
            <strong>{edu.Level}</strong> - <span>{edu.Institution}</span> <span> ({edu.Year}) </span>
            {edu.Degree && <p>Degree: {edu.Degree}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationResume;
