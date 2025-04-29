import React from "react";
import "../app.css";

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
        <img src="http://localhost:8080/image/Rectangle%206.svg" alt="" className="elemen5" />
      </div>
      <div className="kotak6">
        <button className="button2">Alsa</button>
      </div>
      <div className="kotak1">
        <img src="http://localhost:8080/image/Group%203.svg" alt="" className="elemen1" />
        <div className="kotak2">
          <img src="http://localhost:8080/image/Group%2022.svg" alt="" className="elemen2" />
          <div className="kotak3">
            <img src="http://localhost:8080/image/Ellipse%205.svg" alt="" className="elemen3" />
            <div className="kotak4">
              <img src="http://localhost:8080/image/Rectangle%205.svg" alt="" className="elemen4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
