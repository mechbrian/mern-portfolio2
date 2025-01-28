/*
  File Name: Home.css
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import {ThemeProvider} from '@material-ui/styles';
import MainRouter from '../MainRouter';
// import Contact from './contact';
// import theme from '../theme';
// import {hot} from 'react-hot-loader';

function App() {
  return (
  <Router>
    <MainRouter />
  </Router>
  );
};
export default App
