import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/img/loading.json";

export default function LoadingMain() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={300} width={500} />;
}
