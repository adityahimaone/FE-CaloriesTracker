import React from "react";

export default function CardFood(props) {
  return (
    <div class="max-w-full mx-auto m-4 bg-white rounded-md shadow-md overflow-hidden md:max-w-full">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:max-h-28 md:w-48"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-grow p-3 sm:p-3">
          <div className="">
            <h1 className="text-3xl">{props.title}</h1>
          </div>
          <div className="">
            <h2 className="text-xl">+ {props.calorie} Kcal</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
