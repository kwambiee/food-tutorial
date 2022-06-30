import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default Pages;
