/*
  File Name: service.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import "./service.css";
import img_csharp from "./assets/csharp.svg";
import img_java from "./assets/java.svg";
import img_python from "./assets/python.svg";
import img_javascript from "./assets/javascript.jpg";
import img_sql from "./assets/sql.svg";
import img_mongodb from "./assets/mongodb.svg";

export default function service() {

  // skills data object
  const skills = [
    {
      category: "Programming",
      items: ["C#", "Java", "Python", "JavaScript", "HTML/CSS"],
    },
    {
      category: "Database",
      items: ["SQL", "MongoDB"],
    },
    {
      category: "Frameworks & Libraries",
      items: [".NET", "Flask", "Angular", "Node.js"],
    },
    {
      category: "Testing",
      items: ["Postman"],
    },
    {
      category: "Tools & Technologies",
      items: ["Android Studio", "Git", "SVN", "SolidWorks"],
    },
  ];

  // images object
  const images = [img_csharp, img_java, img_python, img_javascript, img_sql, img_mongodb];

  return (

    // main body of the service page
    <div className="services-container">

      {/* services list section */}
      <div className="services-list">
        {skills.map((skillGroup, index) => (

          // service group section
          <div className="service-group" key={index}>
            <h2 className="group-title">{skillGroup.category}</h2>
            <ul className="group-items">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        ))}
      </div>

      {/* services images section */}
      <div className="services-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`service-${index}`} />
        ))}
      </div>
      
    </div>
  );
}
