import React from "react";
import "./TechnicalSkills.css";

const SkillBar = ({ label, percentage, style }) => {
  return (
    <div className="bar">
      <div className="label">
        <span>{label}</span>
      </div>
      <div className={style}>
        <span data-percentage={percentage}></span>
      </div>
    </div>
  );
};

export default SkillBar;
