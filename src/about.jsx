/*
  File Name: about.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import "./about.css";
import mePhoto from "./assets/me.png";
import resumePath from "./assets/Resume_PoKaiChao.pdf";

export default function About() {

  // introduction data object
  const introduction = {
    name: "po-kai chao",
    title: "Software Developer",
    img: mePhoto,
    resume: resumePath,
    content:
      "I am a passionate software developer with expertise in building user-centric applications. With a strong focus on clean code and innovative solutions, I aim to create meaningful digital experiences. I love solving complex problems and contributing to impactful projects.",
  };

  return (

    // main body of the about page
    <div className="about-container">

      {/* photo section */}
      <div className="about-photo">
        <img src={introduction.img} alt={"my-photo"} />
      </div>

      {/* details section */}
      <div className="about-details">
        <h2 className="about-title">{introduction.title}</h2>
        <p className="about-content">{introduction.content}</p>
        <a
          href={introduction.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          My Resume (PDF)
        </a>
      </div>

    </div>
  );
}
