var React = require("react");
var ReactDOM = require("react-dom");
var style = require("../app.css");
// var image = require("../image/Group 23.svg");
// import logo from '../image/Group 23.svg'

const home = (
    <div id="home" className="home">
     <div className="desk">
        <p className="ptext">Hi, my name is..</p>
        <h1 className="title1">PUTRI SALSABILA</h1>
        <p className="paragraph">I’m Junior Programmer in 1 Ciomas Vocational High School, I like to share all my experiences.</p>
        <a href="#about">
          <button className="button1">Read More</button>
          </a>
      </div>
      <div className="kotak5">
        <img src="http://localhost:8080/image/Rectangle%206.svg" alt="" className="elemen5"/>
      </div>
      <div className="kotak6">
        <button className="button2">AlSA</button>
      </div>
      <div className="kotak1">
        <img src="http://localhost:8080/image/Group%203.svg" alt="" className="elemen1"/>
        <div className="kotak2">
        <img src="http://localhost:8080/image/Group%2022.svg" alt="" className="elemen2"/>
        <div className="kotak3">
        <img src="http://localhost:8080/image/Ellipse%205.svg" alt="" className="elemen3"/>
        <div className="kotak4">
        <img src="http://localhost:8080/image/Rectangle%205.svg" alt="" className="elemen4"/>
        </div>
        </div>
        </div>
      </div>
     </div>
    );

export {home};