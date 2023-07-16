import "./app.scss"
import Topbar from "./Components/topbar/Topbar";
// import React from "react";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Menu from "./Components/menu/Menu"
import {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;
