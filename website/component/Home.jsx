import React from "react";
import "../app.css";
import rectangke from "../image/Rectangle 6.svg";
import group3 from "../image/Group 3.svg";
import group22 from "../image/Group 22.svg";
import group23 from "../image/Group 23.svg";
import ellipse5 from "../image/Ellipse 5.svg";
import rectangle5 from "../image/Rectangle 5.svg";
import group8 from "../image/Group 8.svg";

export default function Home() {
  return (
    <div id="home" className="home">
      <div className="desk">
        <p className="ptext">Halo, nama saya..</p>
        <h1 className="title1">Putri Salsabila</h1>
        <p className="paragraph">Saya adalah Junior Programmer di SMK Negeri 1 Ciomas. Saya senang berbagi pengalaman.</p>
        <a href="#about">
          <button className="button1">Read More</button>
        </a>
      </div>
      <div className="kotak5">
        <img src={rectangke} alt="" className="elemen5" />
      </div>
      <div className="kotak6">
        <button className="button2">Alsa</button>
      </div>
      <div className="kotak1">
        <img src={group3} alt="" className="elemen1" />
        <div className="kotak2">
          <img src={group22} alt="" className="elemen2" />
          <div className="kotak3">
            <img src={ellipse5} alt="" className="elemen3" />
            <div className="kotak4">
              <img src={rectangle5} alt="" className="elemen4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
