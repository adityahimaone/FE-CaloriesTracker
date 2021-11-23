import React, { Component, useState } from "react";
import Header from "../../components/Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../../components/Footer";
import { Tab } from "@headlessui/react";
import Styles from "./Dashboard.module.css";
import { FireIcon, PencilAltIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

export default function Dashboard() {
  const percentage = 80;
  return (
    <div className={Styles.backgroundPattren}>
      <Header />
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center bg-white m-4 mt-8 rounded-md shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div class="flex flex-row mt-4 mx-5 items-center">
              <div className="m-2">
                <div class="avatar">
                  <div class="rounded-full w-14 h-14">
                    <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
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
          <div>
            <div class="relative flex flex-col sm:flex-col bg-blue-400 rounded-md m-5">
              <div className="flex flex-row justify-between p-2">
                <div className="flex items-center">
                  <h1 className="text-white font-semibold mr-2">
                    Calorie Stats
                  </h1>
                  <a href="#save-calorie-modal">
                    <PencilAltIcon className="h-5 w-5 text-white" />
                  </a>
                </div>
                <div>
                  <FireIcon className="h-5 w-5 text-white" />
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
                    </Transition>
                  </div>
                </div>
                <div class="flex items-center flex-wrap w-full h-36 sm:h-auto">
                  <div class="max-w-lg mx-auto text-center flex flex-row items-center text-white">
                    <div>
                      <h1 className="text-4xl font-bold">792</h1>
                      <h1 className="text-2xl">/1992</h1>
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
                    <div class="stat-value">2 / 7,300</div>
                    <div class="stat-title">Food Intake</div>
                    <div class="stat-desc">
                      <progress
                        value={percentage}
                        max="100"
                        class="progress progress-accent"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-4 mb-4 ">
            <Tab.Group>
              <Tab.List className=" w-full tabs">
                <Tab
                  className={({ selected }) =>
                    selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
                  }
                >
                  Histories
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
                  }
                >
                  Input Food
                </Tab>
                <div className="flex-grow tab tab-lifted" />
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className="bg-white max-w-full p-2 sm:p-5 border border-gray-300 border-t-0  rounded-b-lg border-opacity-100">
                  <div class="max-w-full mx-auto m-4 bg-white rounded-md shadow-md overflow-hidden md:max-w-full">
                    <div class="md:flex">
                      <div class="md:flex-shrink-0">
                        <img
                          class="h-48 w-full object-cover md:max-h-28 md:w-48"
                          src="https://asset.kompas.com/crops/B_DV5V6k-8yyl8Z9daS3hb6E3_M=/0x0:739x493/750x500/data/photo/2020/07/28/5f1fdcdacafc4.jpg"
                          alt="sate"
                        />
                      </div>
                      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-grow p-3 sm:p-3">
                        <div className="">
                          <h1 className="text-3xl">Sate</h1>
                        </div>
                        <div className="">
                          <h2 className="text-xl">+ 321 Kcal</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="max-w-full mx-auto m-4 bg-white rounded-md shadow-md overflow-hidden md:max-w-full">
                    <div class="md:flex">
                      <div class="md:flex-shrink-0">
                        <img
                          class="h-48 w-full object-cover md:max-h-28 md:w-48"
                          src="http://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
                          alt="sate"
                        />
                      </div>
                      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-grow p-3 sm:p-3">
                        <div className="">
                          <h1 className="text-3xl">Nasi Padang</h1>
                        </div>
                        <div className="">
                          <h2 className="text-xl">+ 321 Kcal</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="bg-gray-50 max-w-full p-2 sm:p-5 border border-gray-300 border-t-0 border-opacity-100 rounded-b-lg h-40">
                  <h1>Input Food</h1>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      <br />
      <Footer />
      {/* Modal Add */}
      <div id="save-calorie-modal" class="modal">
        <div class="relative modal-box rounded-b-md">
          <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
            <h1 className="text-center text-xl font-bold text-white">
              Save Calorie Need
            </h1>
          </div>
          <div className="mt-10">
            <div>
              <div className="form-control flex flex-row px-4 py-2 items-center">
                <div className="flex-none  w-36">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Berat Badan
                    </span>
                  </label>
                </div>
                <div className="flex-auto ">
                  <label className="input-group input-group-sm">
                    <input
                      type="number"
                      placeholder="50"
                      // value=""
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
                      Tinggi Badan
                    </span>
                  </label>
                </div>
                <div className="flex-auto ">
                  <label className="input-group input-group-sm">
                    <input
                      type="number"
                      placeholder="150"
                      // value=""
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
                      // value=""
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
                      name="opt"
                      checked="checked"
                      class="radio"
                      value=""
                    />
                    <span className="font-semibold mx-2">Laki - laki</span>
                  </label>
                  <label class="cursor-pointer label">
                    <input
                      type="radio"
                      name="opt"
                      checked="checked"
                      class="radio"
                      value=""
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
                  <select class="select select-bordered w-full select-sm max-w-xs">
                    <option disabled="" selected="">
                      Pilih Aktifitas
                    </option>
                    <option>telekinesis</option>
                    <option>time travel</option>
                    <option>invisibility</option>
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
            <a
              href="#"
              class="bg-green-400 text-white py-2 px-3 rounded-md hover:bg-green-500"
            >
              Submit
            </a>
            <a
              href="#"
              class="bg-red-400 text-white py-2 px-3 rounded-md hover:bg-red-500"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
