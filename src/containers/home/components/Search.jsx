import React, { useState } from "react";
import Styles from "../Home.module.css";
import { SearchIcon } from "@heroicons/react/solid";
import gqlFood from "../../../graphql/GqlFoodManagement";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const { DataGetFoods } = gqlFood();

  const handleOnSearch = (e) => {
    e.preventDefault();
    const foodResult = DataGetFoods.calories_tracker_foods.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase().trim());
    });
    setResult(foodResult);
    setSearch("");
  };
  console.log(DataGetFoods);
  return (
    <div
      id="search"
      className={`flex flex-col justify-items-center  text-center bg-blue-400 py-16 md:py-24 bg-fixed ${Styles.backgroundSearch}`}
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Search a Food Here
      </h1>
      <div
        className="relative w-full max-w-screen-xl p-4 mx-auto"
        onSubmit={handleOnSearch}
      >
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Type Any Food"
          className="w-full h-10 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-light"
        />
        <SearchIcon
          className="absolute top-6 right-7 w-6 h-6 text-black"
          onClick={handleOnSearch}
        />
        <div className="relative w-full max-w-screen-xl">
          {result.map((food) => {
            return (
              <div className="absolute flex flex-row justify-items-center my-2 w-full  bg-white rounded-md items-center shadow-lg">
                <img
                  src={food.foodUrl}
                  alt={food.name}
                  className="rounded-md w-32 md:w-44"
                />
                <div className="flex justify-between flex-grow px-4">
                  <p className="text-black text-2xl md:text-4xl font-semibold">
                    {food.name}
                  </p>
                  <p className="text-black text-xl md:text-2xl justify-self-end">
                    + {food.calorie} Kcal
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
