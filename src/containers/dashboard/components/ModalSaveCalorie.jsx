import React, { useState } from "react";
import { FireIcon } from "@heroicons/react/solid";

export default function ModalSaveCalorie(props) {
  console.log("ModalSaveCalorie Props", props);
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
    setCalories(resultCalorie);
    return resultCalorie;
  };

  const id_user = 1;
  const onSubmit = (e) => {
    e.preventDefault();

    const newCalories = {
      calorieNeed: calories,
      weight: inputValue.weight,
      height: inputValue.height,
    };
    props.editCalorie(id_user, newCalories);
    setInputValue(initInput);
  };

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
    <div id="save-calorie-modal" className="modal">
      <div className="relative modal-box rounded-b-md">
        <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
          <h1 className="text-center text-xl font-bold text-white">
            Save Calorie Need
          </h1>
        </div>
        <div className="mt-10" onSubmit={onSubmit}>
          <div>
            <div className="relative bg-blue-light rounded-md p-10">
              <FireIcon className="absolute left-0 top-0 h-5 w-5 m-2 text-white" />
              <h2 className="text-white text-center text-3xl">
                {calories} Kcal
              </h2>
            </div>
            <div className="form-control flex flex-row px-4 py-2 items-center">
              <div className="flex-none  w-36">
                <label className="label">
                  <span className="label-text font-semibold">Berat Badan</span>
                </label>
              </div>
              <div className="flex-auto ">
                <label className="input-group input-group-sm">
                  <input
                    type="number"
                    placeholder="50"
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
                    placeholder="150"
                    name="height"
                    onChange={onChange}
                    value={inputValue.height}
                    className="input input-bordered input-sm w-full"
                  />
                  <span className="font-semibold">CM</span>
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
                    placeholder="25"
                    name="age"
                    onChange={onChange}
                    value={inputValue.age}
                    className="input input-bordered input-sm w-full"
                  />
                  <span className="font-semibold">Tahun</span>
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
            <div>
              {/* <button className="bg-blue-light text-white font-bold w-full py-2 my-2 rounded-md hover:bg-yellow-light  focus:ring-2 focus:ring-yellow-light">
                  Save Calorie Need
                </button> */}
            </div>
          </div>
        </div>
        <div class="modal-action">
          <button
            className="bg-blue-light text-white py-2 px-3 rounded-md hover:bg-yellow-light"
            onClick={countCalories}
          >
            Calculate
          </button>
          <button
            onClick={onSubmit}
            class="bg-green-400 text-white py-2 px-3 rounded-md hover:bg-green-500"
          >
            Submit
          </button>
          <a
            href="#"
            class="bg-red-400 text-white py-2 px-3 rounded-md hover:bg-red-500"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
}
