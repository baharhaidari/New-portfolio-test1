import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import SkillBar from "./Horizontal Skills/TechnicalSkills";

const FrontendSkills = [
  {
    label: "HTML",
    percentage: 85,
    style: "progress-line js",
  },
  {
    label: "CSS",
    percentage: 90,
    style: "progress-line react",
  },

  {
    label: "Bootstrap",
    percentage: 80,
    style: "progress-line boot",
  },

  {
    label: "JavaScript",
    percentage: 80,
    style: "progress-line boot",
  },
  {
    label: "React",
    percentage: 90,
    style: "progress-line hc",
  },
  {
    label: "Redux",
    percentage: 80,
    style: "progress-line java",
  },
];

const BackendSkills = [
  {
    label: "Node.js",
    percentage: 85,
    style: "progress-line js",
  },
  {
    label: "Express.js",
    percentage: 90,
    style: "progress-line react",
  },
  {
    label: "Git",
    percentage: 95,
    style: "progress-line boot",
  },
  {
    label: "Test 1",
    percentage: 90,
    style: "progress-line hc",
  },
  {
    label: "Test 2",
    percentage: 80,
    style: "progress-line java",
  },
];

export default function Skills() {
  const [isInterSected, setIsInterSected] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInterSected(true);
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__container">
        <div className="skill-title">
          <h1>My Skills_</h1>
        </div>
        <div className="grid">
          <div className="skill-bars">
            <li>Frontend Development</li>
            {FrontendSkills.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                style={isInterSected ? skill.style : ""}
              />
            ))}
          </div>

          <div className="circle__skills">
            <li>Backend Development</li>
            {BackendSkills.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                style={isInterSected ? skill.style : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
