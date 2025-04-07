var React = require("react");
var ReactDOM = require("react-dom");
var style = require("../app.css");

const navbar = (
<div>
<div className="header">
  <div className="logo">
   <img src="http://localhost:8080/image/Group%208.svg" alt="" className="gambar"/>
   </div>
   <div className="navbar">
       <a href="#home">Home</a>
       <a href="#about">About</a>
       <a href="#certificate">Certificate</a>
   </div>
 </div>
</div>
);

export {navbar};