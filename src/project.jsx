/*
  File Name: project.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import "./Project.css";
import img01 from "./assets/proj01.png";
import img02 from "./assets/proj02.png";
import img03 from "./assets/proj03.png";

export default function Project() {

  // project data oject
  const projects = [
    {
      title: "Project Management System",
      img: img01,
      description:
        "Developed a project management system using Angular and .NET Core. My role involved implementing RESTful APIs, creating dynamic front-end components, and ensuring robust user authentication. The system improved project tracking efficiency by 35%.",
    },
    {
      title: "E-Commerce Platform",
      img: img02,
      description:
        "Designed and developed a scalable e-commerce platform using React and Node.js. Contributed to front-end development, integrated payment gateways, and optimized product search functionality. The platform led to a 50% increase in sales for the client.",
    },
    {
      title: "Educational Mobile App",
      img: img03,
      description:
        "Built an educational mobile app using Flutter, enabling students to access interactive learning materials and quizzes. My role included designing the UI, implementing app features, and managing data synchronization. The app achieved over 10,000 downloads within the first 6 months.",
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
