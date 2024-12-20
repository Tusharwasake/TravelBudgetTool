import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SingUp from "./Components/Auth/SingUp";
import AboutUs from "./Components/Home/AboutUs";
import ContactSection from "./Components/Home/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactSection/>} />
      </Routes>
    </Router>
  );
}

export default App;
