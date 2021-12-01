import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/img/loading-preeload.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={320} height={50} />;
}
