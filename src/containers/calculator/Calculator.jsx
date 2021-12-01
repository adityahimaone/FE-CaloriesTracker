import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Styles from "./Calculator.module.css";
import BannerImg from "./components/BannerImg";
import CalculatorInput from "./components/CalculatorInput";

export default function Calculator() {
  return (
    <div className={Styles.backgroundPattren}>
      <Header />
      <div className="flex flex-col md:flex-row h-screen">
        {/* Banner  */}
        <BannerImg />
        {/* Calculator */}
        <CalculatorInput />
      </div>
      <Footer />
    </div>
  );
}
