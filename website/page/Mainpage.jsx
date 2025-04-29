import React from "react";
import Navbar from "../component/Navbar";
import Home from "../component/Home";
import About from "../component/About";
import Certificate from "../component/Certificate";

export default function MainPage() {
  return (
    <div className="line">
      <div className="line1">
        <Navbar />
        <Home />
        <About />
        <Certificate />
      </div>
    </div>
  );
}
