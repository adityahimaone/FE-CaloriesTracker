import React from "react";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div class="flex flex-row mt-4 mx-5 items-center">
        <div className="m-2">
          <div class="avatar">
            <div class="rounded-full w-14 h-14">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" alt="avatar" />
            </div>
          </div>
        </div>
        <div className="m-2">
          <h3 className="text-2xl font-medium">Hello, User!</h3>
          <h4 className="text-lg">Check your daily calories</h4>
        </div>
      </div>
      <div class="card lg:card-side text-black bg-gradient-to-r from-green-400 to-green-300 sm:bg-gradient-to-r sm:from-transparent  sm:to-transparent mx-5 sm:mt-2 rounded-md">
        <div className="flex flex-row justify-around text-white sm:text-black text-center">
          <div className="m-4">
            <div className="text-lg font-semibold">Height</div>
            <div>180 CM</div>
          </div>
          <div className="m-4">
            <div className="text-lg font-semibold">Weight</div>
            <div>80 KG</div>
          </div>
        </div>
      </div>
    </div>
  );
}
