/*
  File Name: MainRouter.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./src/about";
import Education from "./src/education";
import Project from "./src/project";

// Routes is used as a container for defining multiple Route components
// The Route component is used to define a route and its corresponding component
const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};
// The MainRouter component is exported to be used in the App component
// default keyword is used to export a single value
export default MainRouter;
