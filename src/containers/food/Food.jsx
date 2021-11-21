import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FoodImg from "../../assets/img/pizza.png";

export default function Food() {
  return (
    <>
      <Header />
      <div>
        <div className="my-4">
          <h1 className="text-2xl text-center font-bold md:text-4xl border-dashed border-b-4 border-blue-400 max-w-screen-xl mx-auto">
            Food List
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-screen-xl mx-auto">
          <div
            id="card"
            className="flex flex-col flex-grow bg-white rounded-xl shadow-lg m-2"
          >
            <div>
              <img
                src={FoodImg}
                alt="food"
                className=" h-64 w-full object-cover object-center rounded-t-xl filter-none"
              />
            </div>
            <div className="m-4">
              <h2 className="text-3xl font-semibold my-2">Pizza</h2>
              <h5 className="text-xl">+300 Kcal</h5>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col flex-grow bg-white rounded-xl shadow-lg m-2"
          >
            <div>
              <img
                src={FoodImg}
                alt="food"
                className="h-64 w-full object-cover object-center  rounded-t-xl filter-none"
              />
            </div>
            <div className="m-4">
              <h2 className="text-3xl font-semibold my-2">Pizza</h2>
              <h5 className="text-xl">+300 Kcal</h5>
            </div>
          </div>
          <div
            id="card"
            className="flex  flex-col flex-grow bg-white rounded-xl shadow-lg m-2"
          >
            <div>
              <img
                src={FoodImg}
                alt="food"
                className="h-64 w-full object-cover object-center  rounded-t-xl filter-none"
              />
            </div>
            <div className="m-4">
              <h2 className="text-3xl font-semibold my-2">Pizza</h2>
              <h5 className="text-xl">+300 Kcal</h5>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col flex-grow bg-white rounded-xl shadow-lg m-2"
          >
            <div>
              <img
                src={FoodImg}
                alt="food"
                className=" h-64 w-full object-cover object-center  rounded-t-xl filter-none"
              />
            </div>
            <div className="m-4">
              <h2 className="text-3xl font-semibold my-2">Pizza</h2>
              <h5 className="text-xl">+300 Kcal</h5>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col flex-grow bg-white rounded-xl shadow-lg m-2"
          >
            <div>
              <img
                src={FoodImg}
                alt="food"
                className=" h-64 w-full object-cover object-center  rounded-t-xl filter-none"
              />
            </div>
            <div className="m-4">
              <h2 className="text-3xl font-semibold my-2">Pizza</h2>
              <h5 className="text-xl">+300 Kcal</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
