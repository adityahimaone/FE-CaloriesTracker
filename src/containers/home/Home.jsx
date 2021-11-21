import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroImage from "../../assets/img/undraw_tasting_de22.svg";
import {
  SparklesIcon,
  BookmarkIcon,
  CalculatorIcon,
  ChevronUpIcon,
  ArrowSmRightIcon
} from "@heroicons/react/solid";
import Styles from "./Home.module.css";
import { Disclosure } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto">
        {/* Hero */}
        <div
          id="Hero"
          className="flex flex-col sm:flex-row md:justify-between max-w-screen-xl mx-auto px-5 py-5 md:py-32 my-10 md:my-10 h-full items-center"
        >
          <div className="sm:hidden h-48">
            <img src={HeroImage} alt="hero" className="w-full h-48" />
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
            <a
              className="bg-blue-light rounded-md px-3 py-2 hover:bg-blue-400 text-white font-medium"
              href="#3"
            >
              START FOR FREE
            </a>
          </div>
          <div className="hidden sm:inline">
            <img src={HeroImage} alt="hero" className="w-full h-96" />
          </div>
        </div>
        {/* Search */}
        <div
          id="search"
          className={`flex flex-col justify-items-center  text-center bg-blue-400 py-16 md:py-24 bg-fixed ${Styles.backgroundSearch}`}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Search a Food Here
          </h1>
          <div className="w-full max-w-screen-xl p-4 mx-auto">
            <input
              type="text"
              placeholder="Type Any Food"
              className="w-full h-10 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-light"
            />
          </div>
        </div>
        {/* Feature */}
        <div
          id="feature"
          className="flex flex-col w-full max-w-screen-xl mx-auto my-5 md:my-20"
        >
          <div className="text-center mx-4 md:mb-8">
            <h1 className="text-xl sm:text-3xl font-bold">
              A Powerful Tool for Achieve Your Goal
            </h1>
            <p className="font-thin">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div
              id="card-1"
              className="relative flex-1 justify-center bg-white p-10 mx-5 my-3 text-center shadow-2xl rounded-lg lg:py-16"
            >
              <span className="bg-blue-500 h-2 inset-x-0 top-0 absolute rounded-t-md"></span>
              <SparklesIcon className="h-10 w-10 text-blue-400 mx-auto" />
              <h3 className="font-semibold text-xl">Stay Focus Your Goal</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
            <div
              id="card-2"
              className="relative flex-1 justify-center bg-white p-10 mx-5 my-3 text-center shadow-2xl rounded-lg lg:py-16"
            >
              <span className="bg-blue-500 h-2 inset-x-0 top-0 absolute rounded-t-md"></span>
              <BookmarkIcon className="h-10 w-10 text-blue-400 mx-auto" />
              <h3 className="font-semibold text-xl">Save Your Food</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
            <div
              id="card-3"
              className="relative flex-1 justify-center bg-white p-10 mx-5 my-3 text-center shadow-2xl rounded-lg lg:py-16"
            >
              <span className="bg-blue-500 h-2 inset-x-0 top-0 absolute rounded-t-md"></span>
              <CalculatorIcon className="h-10 w-10 text-blue-400 mx-auto" />
              <h3 className="font-semibold text-xl">Count Your Calories</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
          </div>
          <div className="mx-auto my-2 md:my-4">
            <a
              href="#1"
              className="bg-blue-light px-3 py-2 text-white font-semibold rounded-md shadow-lg hover:bg-blue-500"
            >
              START YOUR JOURNEY HERE 
            </a>
          </div>
        </div>
        {/* FAQ */}
        <div id="faq" className="my-10 mx-4">
          <div className="my-4">
            <h1 className="text-center text-2xl md:text-4xl font-bold">FAQ</h1>
          </div>
          <div className="w-full max-w-2xl p-2 mx-auto bg-white rounded-md shadow-lg">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>Bagaimana Cara Menggunakan ?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>Punya fitur apa saja?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
