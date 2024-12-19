import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SingUp from "./Components/Auth/SingUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </Router>
  );
}

export default App;
