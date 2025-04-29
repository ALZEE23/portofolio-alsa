import React from "react";
import "../app.css";

export default function About() {
  return (
    <div id="about" className="container">
      <div className="box1">
        <div className="purple"></div>
        <p className="introduce">
          Saat ini saya sedang belajar dan mengembangkan kemampuan di bidang  
          pemrograman, terutama pada HTML, CSS, dan JavaScript. Saya juga mulai mencoba React.js 
          dan Tailwind CSS.
        </p>
      </div>

      <div className="box2">
        <div className="green"></div>
        <p className="hobby">
          Saya memiliki beberapa hobi yang saya sukai, seperti membaca novel, mendengarkan musik, 
          menonton drama Korea, bermain roblox, bersepeda, bermain badminton, dan lari.
        </p>
      </div>

      <div className="box3">
        <div className="pink"></div>
        <p className="motivasi">
          Motivasi saya adalah "a day without learning is a day without breathing" — bagi saya, belajar adalah 
          bagian penting dalam hidup karena selalu ada hal baru yang bisa dipelajari setiap hari.
        </p>
      </div>
    </div>
  );
}
