/*
  File Name: project.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import "./project.css";
import img01 from "./assets/proj01.png";
import img02 from "./assets/proj02.png";
import img03 from "./assets/proj03.png";

export default function Project() {

  // project data oject
  const projects = [
    {
      title: "Slot Game Algorithm",
      img: img01,
      description:
        "Developed and implemented mathematical models for slot games to precisely calculate expected values, ensuring optimal game balance and an engaging player experience.",
    },
    {
      title: "3-Axis Wood Panel Machine",
      img: img02,
      description:
        "Designed and developed a precision 3-axis wood panel cutting machine for customized cabinet manufacturing. Ensured high accuracy and efficiency in cutting operations, optimizing workflow for bespoke cabinetry production.",
    },
    {
      title: "Angular Website",
      img: img03,
      description:
        "Developed a dynamic and responsive cosmetic product introduction website using Angular. Implemented interactive UI components, optimized performance, and ensured a seamless user experience for product exploration.",
    },
  ];

  return (

    // main project body
    <div className="projects-container">

      {/* project group section */}
      <div className="projects-grid">
        {projects.map((project, index) => (

          // project item section
          <div className={`project-item`} key={index}>

            {/* project description section */}
            <div className="project-description">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-text">{project.description}</p>
            </div>

            {/* project image section */}
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>

          </div>

        ))}
      </div>
      
    </div>
  );
}
