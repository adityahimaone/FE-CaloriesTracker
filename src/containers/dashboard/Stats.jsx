import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Stats() {
  const percentage = 80;
  return (
    <div>
      <div className="bg-gray-100 rounded-md w-auto m-4">
        <div>
          <div className="flex">
            <div className="text-left p-4">
              <h3 className="text-2xl font-medium">Hello, User!</h3>
              <h4 className="text-lg">Check your daily calories</h4>
            </div>
            <div></div>
          </div>
        </div>
        <div class="relative flex flex-wrap bg-blue-200 rounded-md m-5">
          <div class="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24  lg:items-center">
            <div class="w-44 lg:w-50 mx-auto lg:pr-12">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  rotation: 0,
                  textSize: "18px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(36, 231, 149, ${percentage / 100})`,
                  textColor: "#fff",
                  trailColor: "#fff",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div class="flex items-center flex-wrap w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
            <div class="max-w-lg mx-auto text-center lg:pr-12">
              <h1 className="text-3xl">792 kcal</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
