import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lottie from "react-lottie";
import animationData from "../../assets/img/about_hero.json";
import Button from "../../elements/Button";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
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
      duration: 700,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto mt-4 md:mt-8">
        <div className="mx-auto max-w-screen-lg" data-aos={"zoom-in"}>
          <h1 className="text-xl md:text-2xl font-semibold text-center">
            <span className="text-blue-light">Daily Calorie </span>
            <span className="text-gray-400">
              adalah sebuah platform untuk membantu pengguna untuk Program Diet
              dengan cara yang mudah
            </span>
          </h1>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row my-8">
          <div className="flex-1 text-center" data-aos={"fade-up-right"}>
            <h1 className="text-9xl text-blue-400">30</h1>
            <h5 className="text-sm my-4">
              Coba Aplikasi ini dalam 30 hari
              <br /> dan rasakan manfaatnya
            </h5>
            <Button isPrimary name="START FOR FREE" link="#" />
          </div>
          <div className="flex-1 mx-auto" data-aos={"fade-up-left"}>
            <Lottie options={defaultOptions} height={320} width={320} />
          </div>
        </div>
        <div className="my-8">
          <h2
            className="text-2xl mx-auto text-center border-b-4 w-32 text-blue-400 border-blue-400 my-4"
            data-aos={"zoom-in"}
          >
            Build With
          </h2>
          <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto">
            <a
              className="flex-grow text-center text-white rounded-md mx-4 py-5 my-2 bg-blue-light text-xl shadow-lg"
              data-aos={"flip-up"}
            >
              GraphQL
            </a>
            <a
              className="flex-grow text-center text-white rounded-md mx-4 py-5 my-2 bg-blue-light text-xl shadow-lg"
              data-aos={"flip-up"}
            >
              ReactJS
            </a>
            <a
              className="flex-grow text-center text-white rounded-md mx-4 py-5 my-2 bg-blue-light text-xl shadow-lg"
              data-aos={"flip-up"}
            >
              tailwindcss
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
