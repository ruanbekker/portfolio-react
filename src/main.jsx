import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Resume from "./components/Resume";
import './index.css'

// Apply dark mode on initial load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

