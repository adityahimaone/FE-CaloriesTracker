import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/dashboard/Dashboard";
import Home from "./containers/home/Home";
import Calculator from "./containers/calculator/Calculator";
import Food from "./containers/food/Food";
import FoodManagement from "./containers/food_management/FoodManagement";
import About from "./containers/about/About";
import NotFound from "./containers/not_found/NotFound";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/food" element={<Food />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/food_management" element={<FoodManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
