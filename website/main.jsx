var React = require("react");
var ReactDOM = require("react-dom");
var style = require("./app.css");
// var cihuy = require('./cihuy.jsx');
import { navbar, home } from "./component/Navbar.jsx";

ReactDOM.render(
  <div className="leclerc">
    <div className="charles">
      {navbar}
      {home}
    </div>
  </div>,
  document.getElementById("root")
);
