import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/img/hero_home.json";
import Button from "../../../elements/Button";

export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      id="Hero"
      className="flex flex-col sm:flex-row-reverse md:justify-between max-w-screen-xl mx-auto px-5 py-5 md:py-28 my-10 md:my-10 h-full items-center"
    >
      <div className="">
        {/* <img src={HeroImage} alt="hero" className="w-full h-48" /> */}
        <Lottie options={defaultOptions} height={450} width={450} />
      </div>
      <div className="text-center sm:text-left">
        <h1 className="text-4xl md:text-5xl font-bold md:leading-tight">
          Track Your Daily Calories <br className="hidden md:inline" />
          To Help Your Diet
          <br className="hidden md:inline" /> Program
        </h1>
        <h2 className="text-xl leading-loose mb-4">
          A food diary application, calorie calculation, and food database
        </h2>
        <Button isPrimary name="START FOR FREE" link="#" />
      </div>
      {/* <div className="hidden sm:inline">
            <img src={HeroImage} alt="hero" className="w-full h-96" />
            <Lottie options={defaultOptions} height={400} width={400} />
          </div> */}
    </div>
  );
}
