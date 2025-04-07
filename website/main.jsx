var React = require("react");
var ReactDOM = require("react-dom");
var style = require("./app.css");
import {navbar} from "./component/Navbar.jsx";
import {home} from "./component/Home.jsx";
import {about} from "./component/About.jsx";
import {certificate} from "./component/Certificate.jsx";

ReactDOM.render(
  <div className="leclerc">
    <div className="charles">
      {navbar}
      {home}
      {about}
      {certificate}
    </div>
  </div>,
  document.getElementById("root")
);
