import Navbar from "./components/navbar/Navbar.jsx";

import Intro from "./components/intro/Intro.jsx";

import Portfolio from "./components/portfolio/Portfolio.jsx";

import Contact from "./components/contact/Contact.jsx";

import Works from "./components/works/Works.jsx";

import app from "./app.scss";

import { useState } from "react";

import Menu from "./components/menu/Menu.jsx";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
