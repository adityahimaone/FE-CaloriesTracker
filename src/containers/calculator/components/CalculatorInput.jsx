import React, { useState } from "react";
import Button from "../../../elements/Button";
import InputText from "../../../elements/InputText";
import { FireIcon } from "@heroicons/react/solid";

export default function CalculatorInput() {
  const initInput = {
    weight: 0,
    height: 0,
    age: 0,
    jk: "male",
    activity: 0,
  };

  const [inputValue, setInputValue] = useState(initInput);
  const [calories, setCalories] = useState(0);
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log("state", inputValue);
  };

  const countCalories = () => {
    const { weight, height, age, jk, activity } = inputValue;
    let calorie =
      jk === "male"
        ? (10 * weight + 6.25 * height - 5 * age + 5) * activity
        : (10 * weight + 6.25 * height - 5 * age - 161) * activity;
    const resultCalorie = calorie.toFixed(0);
    return resultCalorie;
  };
  // console.log("function",countCalories());

  const onSubmit = (e) => {
    e.preventDefault();
    setCalories(countCalories);
  };

  const onReset = () => {
    setInputValue(initInput);
    setCalories(0);
  };

  // console.log("state calories",calories);
  const activityValue = [
    {
      id: 1,
      name: "Sedentary",
      value: 1.2,
    },
    {
      id: 2,
      name: "Lightly Active",
      value: 1.375,
    },
    {
      id: 3,
      name: "Moderately Active",
      value: 1.55,
    },
    {
      id: 4,
      name: "Very Active",
      value: 1.725,
    },
    {
      id: 5,
      name: "Extra Active",
      value: 1.9,
    },
  ];

  return (
    <div className="flex-1 self-center ">
      <div className="bg-white rounded-md mt-8 md:mt-0 p-2 shadow-lg max-w-md mx-auto">
        <div className="text-center my-3">
          <h1 className="text-2xl font-bold">Harrist-Bennedict Callculator</h1>
          <h5 className="text-md">Count your need calorie here</h5>
        </div>
        <form id="form" className="max-w-lg mx-auto" onSubmit={onSubmit}>
          <div className="relative bg-blue-light rounded-md p-10">
            <FireIcon className="absolute left-0 top-0 h-5 w-5 m-2 text-white" />
            <h2 className="text-white text-center text-3xl">{calories} Kcal</h2>
          </div>
          <div>
            <div className="form-control flex flex-row px-4 py-2 items-center">
              <div className="flex-none w-36">
                <label className="label">
                  <span className="label-text font-semibold">Berat Badan</span>
                </label>
              </div>
              <div className="flex-auto ">
                <label className="input-group input-group-sm">
                  <input
                    type="number"
                    placeholder="BB"
                    name="weight"
                    onChange={onChange}
                    value={inputValue.weight}
                    className="input input-bordered input-sm w-full"
                  />
                  <span className="font-semibold">KG</span>
                </label>
              </div>
            </div>
            <div className="form-control  flex flex-row px-4 py-2 items-center">
              <div className="flex-none  w-36">
                <label className="label">
                  <span className="label-text font-semibold">Tinggi Badan</span>
                </label>
              </div>
              <div className="flex-auto ">
                <label className="input-group input-group-sm">
                  <input
                    type="number"
                    placeholder="TB"
                    name="height"
                    onChange={onChange}
                    value={inputValue.height}
                    className="input input-bordered input-sm w-full"
                  />
                  <span className="font-semibold">KG</span>
                </label>
              </div>
            </div>
            <div className="form-control  flex flex-row px-4 py-2 items-center">
              <div className="flex-none  w-36">
                <label className="label">
                  <span className="label-text font-semibold">Umur</span>
                </label>
              </div>
              <div className="flex-auto ">
                <label className="input-group input-group-sm">
                  <input
                    type="number"
                    placeholder="Umur"
                    name="age"
                    onChange={onChange}
                    value={inputValue.age}
                    className="input input-bordered input-sm w-full"
                  />
                  <span className="font-semibold">KG</span>
                </label>
              </div>
            </div>
            <div className="form-control  flex flex-row px-4 py-2 items-center">
              <div className="flex-none  w-36">
                <label className="label">
                  <span className="label-text font-semibold">
                    Jenis Kelamin
                  </span>
                </label>
              </div>
              <div className="flex-auto flex ">
                <label class="cursor-pointer label">
                  <input
                    type="radio"
                    name="jk"
                    onChange={onChange}
                    class="radio"
                    value="male"
                  />
                  <span className="font-semibold mx-2">Laki - laki</span>
                </label>
                <label class="cursor-pointer label">
                  <input
                    type="radio"
                    name="jk"
                    onChange={onChange}
                    class="radio"
                    value="female"
                  />
                  <span className="font-semibold mx-2">Perempuan</span>
                </label>
              </div>
            </div>
            <div className="form-control flex flex-row px-4 py-2 items-center">
              <div className="flex-none  w-36">
                <label className="label">
                  <span className="label-text font-semibold">
                    Jenis Aktivitas
                  </span>
                </label>
              </div>
              <div className="flex-auto flex">
                <select
                  class="select select-bordered w-full select-sm max-w-xs"
                  name="activity"
                  onChange={onChange}
                >
                  <option disabled="" selected="">
                    Pilih Aktifitas
                  </option>
                  {activityValue.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex my-3">
              <button className="w-full bg-blue-light border rounded-md py-2 text-white font-medium focus:ring-4 focus:ring-yellow-light focus:ring-opacity-50 hover:bg-yellow-light shadow-lg" onClick={onSubmit}>Hitung</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
