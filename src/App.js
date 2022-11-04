import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-country/:fullName" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
