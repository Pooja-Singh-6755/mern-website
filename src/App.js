import React from "react";
import Navbar from "./compounds/Navbar";
import Home from "./compounds/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./compounds/About";
import Contact from "./compounds/Contact";
import "./App.css";
import Signup from "./compounds/Signup";
import Login from "./compounds/Login";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
