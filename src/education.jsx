/*
  File Name: education.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import "./education.css";

export default function Education() {
    
  // my education information object
  const educations = [
    {
      school: "Centennial College",
      degree: "Advanced Diploma - Software Engineering Technology (Co-op)",
      timeline: "Sep. 2024 - Present",
      location: "Toronto, ON",
      highlights: [
        "Key Courses: Testing & QA | Web App Development | Java | Mobile App Development | Software Systems Design",
        "Project: Designed a Software Specification Requirements (SRS) document, including creating UML diagrams and establishing functional/non-functional requirements for a streaming system.",
      ],
    },
    {
      school: "National Taiwan University",
      degree: "Master of Science - Mechanical Engineering",
      timeline: "Sep. 2010 - Aug. 2013",
      location: "Taipei, Taiwan",
      highlights: [
        "Developed a rotor design tool in C++ using the MFC framework as part of an AutoCAD secondary development project, creating a user interface to set parameters and automate model generation within AutoCAD.",
        "Implemented rotor design algorithm in AutoLISP, enabling seamless integration and automation. This tool was adopted by an industry-academia collaboration company, reducing design time significantly.",
        "Teaching Assistant: Guided students in learning SolidWorks, enhancing their proficiency in 3D modeling & design.",
      ],
    },
    {
      school: "National Central University",
      degree: "Bachelor of Science - Mechanical Engineering",
      timeline: "Sep. 2006 - Jun. 2010",
      location: "Taoyuan, Taiwan",
      highlights: [
        "Designed 3D chassis using SolidWorks and performed stress analysis with Cosmos simulation, ensuring structural integrity and achieving weight optimization for improved functionality.",
      ],
    },
  ];

  return (

    // main education body
    <div className="education-container">

      {/* education group section */}
      {educations.map((edu, i) => (

        // education item section
        <div className="education-item" key={i}>
          <h2 className="education-degree">{edu.degree}</h2>
          <p className="education-timeline">{edu.timeline}</p>
          <p className="education-school">
            {edu.school}, {edu.location}
          </p>
          <ul className="education-highlights">
            {edu.highlights.map((highlight, j) => (
              <li key={j}>{highlight}</li>
            ))}
          </ul>
        </div>

      ))}

    </div>
  );
}
