import React from "react";
import Navbar from "../component/Navbar";
import About from "../component/About";
import Certificate from "../component/Certificate";
import Home from "../component/Home";

const Mainpage = () => {
  return (
    <div class="layout">
      <Home />
      <About />
      <Certificate />
    </div>
  );
};

export default Mainpage;
