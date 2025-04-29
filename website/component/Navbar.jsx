import React from "react";
import "../app.css";

export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="http://localhost:8080/image/Group%208.svg" alt="" className="gambar" />
        </div>
        <div className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#certificate">Certificate</a>
        </div>
      </div>
    </div>
  );
}
