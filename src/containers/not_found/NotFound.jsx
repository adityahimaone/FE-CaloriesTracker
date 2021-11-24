import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lottie from "react-lottie";
import animationData from "../../assets/img/77620-404-website-error-animation.json";
import Button from "../../elements/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Header />
      <div className="relative h-screen flex flex-col mx-auto text-center ">
        <Lottie options={defaultOptions} height={350} width={400} />
        <div className="">
          <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
          <button
            className="bg-blue-light text-white rounded-md py-2 px-4 text-lg hover:bg-yellow-light"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
