import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./page/Admin";
import Mainpage from "./page/Mainpage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Mainpage />} />
    </Routes>
  </BrowserRouter>
);
