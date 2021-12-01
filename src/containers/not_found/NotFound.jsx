import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lottie from "react-lottie";
import animationData from "../../assets/img/77620-404-website-error-animation.json";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <div className="relative h-screen flex flex-col mx-auto text-center ">
        <div>
          <Lottie options={defaultOptions} height={350} width={400} />
        </div>
        <div className="" data-aos={"zoom-in-up"}>
          <h1 className="text-4xl font-bold mb-4">Oops, Page Not Found !</h1>
          <button
            className="bg-blue-light text-white rounded-md py-2 px-4 text-lg font-semibold hover:bg-yellow-light"
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
