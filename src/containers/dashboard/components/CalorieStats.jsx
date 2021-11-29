import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FireIcon, PencilAltIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

export default function CalorieStats(props) {
  // console.log("tbas group",TabsGroup());
  const calorieStats = useSelector((state) => state.dashboard);
  const calorieNow = calorieStats.calorieSum;
  const calorieGoal = props.getUser?.calories_tracker_users[0].calorieNeed;
  const percentage = (calorieNow / calorieGoal) * 100;
  const finalCalorie = percentage.toFixed(0);
  return (
    <div>
      <div class="relative flex flex-col sm:flex-col bg-blue-400 rounded-md m-5">
        <div className="flex flex-row justify-between p-2">
          <div className="flex items-center">
            <h1 className="text-white font-semibold mr-2">Calorie Stats</h1>
            <a href="#save-calorie-modal">
              <PencilAltIcon className="h-5 w-5 text-white" />
            </a>
          </div>
          <div>
            <FireIcon className="h-5 w-5 text-white animate-ping" />
          </div>
        </div>
        <div className="flex flex-col mx-auto sm:flex-row  sm:flex-grow sm:mx-0">
          <div class="flex items-center w-full px-4 py-12 sm:items-center">
            <div class="w-44 mx-auto">
              <Transition
                show={true}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
              >
                <CircularProgressbar
                  value={finalCalorie}
                  text={`${finalCalorie}%`}
                  styles={buildStyles({
                    rotation: 0,
                    textSize: "18px",
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(36, 231, 149, ${finalCalorie / 100})`,
                    textColor: "#fff",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </Transition>
            </div>
          </div>
          <div class="flex items-center flex-wrap w-full h-36 sm:h-auto">
            <div class="max-w-lg mx-auto text-center flex flex-row items-center text-white">
              <div>
                <h1 className="text-4xl font-bold">{calorieNow}</h1>
                <h1 className="text-2xl">/ {calorieGoal}</h1>
              </div>
              <div>
                <h1 className="text-4xl font-light">Kcal</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow justify-center">
          <div class="w-full m-2 stats rounded-md">
            <div class="stat">
              <div class="stat-figure text-primary">
                <button class="btn loading btn-circle btn-lg bg-base-200 btn-ghost"></button>
              </div>
              <div class="stat-value">{calorieStats.foodIntake} / 3</div>
              <div class="stat-title">Food Intake Per Day</div>
              <div class="stat-desc">
                <progress
                  value={calorieStats.foodIntake}
                  max="3"
                  class="progress progress-accent"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
