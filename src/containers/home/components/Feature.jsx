import React, { useEffect } from "react";
import {
  SparklesIcon,
  BookmarkIcon,
  CalculatorIcon,
} from "@heroicons/react/solid";
import Button from "../../../elements/Button";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feature() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      id="feature"
      className="flex flex-col w-full max-w-screen-xl mx-auto my-5 md:my-20"
    >
      <div className="text-center mx-4 md:mb-8" data-aos={"fade-up"}>
        <h1 className="text-xl sm:text-3xl font-bold">
          A Powerful Tool for Achieve Your Goal
        </h1>
        <p className="font-thin">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          id="card-1"
          className="relative flex-1 justify-center bg-white p-10 mx-5 my-3 text-center shadow-2xl rounded-lg lg:py-16"
          data-aos={"zoom-in"}
        >
          <span className="bg-blue-500 h-2 inset-x-0 top-0 absolute rounded-t-md"></span>
          <SparklesIcon className="h-10 w-10 text-blue-400 mx-auto" />
          <h3 className="font-semibold text-xl">Stay Focus Your Goal</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
        <div
          id="card-2"
          className="relative flex-1 justify-center bg-white p-10 mx-5 my-3 text-center shadow-2xl rounded-lg lg:py-16"
          data-aos={"zoom-in"}
        >
          <span className="bg-blue-500 h-2 inset-x-0 top-0 absolute rounded-t-md"></span>
          <BookmarkIcon className="h-10 w-10 text-blue-400 mx-auto" />
          <h3 className="font-semibold text-xl">Save Your Food</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
        <div
          id="card-3"
          data-aos={"zoom-in"}
          className="relative flex-1 justify-center bg-white p-10 mx-5 my-3 text-center shadow-2xl rounded-lg lg:py-16"
        >
          <span className="bg-blue-500 h-2 inset-x-0 top-0 absolute rounded-t-md"></span>
          <CalculatorIcon className="h-10 w-10 text-blue-400 mx-auto" />
          <h3 className="font-semibold text-xl">Count Your Calories</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
      </div>
      <div className="mx-auto my-2 md:my-4" data-aos={"zoom-in"}>
        <Button isPrimary name="START YOUR JOURNEY HERE" link="#" />
      </div>
    </div>
  );
}
