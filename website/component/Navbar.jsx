var React = require("react");
var ReactDOM = require("react-dom");
var style = require("../app.css");
// var image = require("../image/Group 23.svg");
// import logo from '../image/Group 23.svg'

const navbar = (
  
<div>
<div className="lando">
  <div className="logo">
   <img src="http://localhost:8080/image/Group%208.svg" alt="" className="gambar"/>
   </div>
   <div className="norris">
       <a href="#about">About</a>
       <a href="#certificate">Certificate</a>
       <a href="#mywork">My Work</a>
   </div>
 </div>
</div>
);

const home = (
<div className="piastri">
 <div className="oscar">
    <p className="ptext">Hi, My Name is..</p>
    <h1 className="title1">PUTRI SALSABILA</h1>
    <p className="paragraph">I’m Junior Programmer in 1 Ciomas Vocational High School, I like to share all my experiences.</p>
    <button className="button1">Read More</button>
  </div>
  <div className="kotak"></div>
 </div>
);

export { navbar, home };