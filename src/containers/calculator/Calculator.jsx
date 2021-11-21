import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FireIcon } from "@heroicons/react/solid";
import FoodCover from "../../assets/img/food-cover.png";
import DietImg from "../../assets/img/undraw_diet_ghvw.svg";
import Styles from "./Calculator.module.css";

export default function Calculator() {
  return (
    <div className={Styles.backgroundPattren}>
      <Header />
      <div className="flex flex-col md:flex-row h-screen">
        <div
          className="relative flex-1 bg-local hidden md:inline  bg-cover bg-center"
          style={{ backgroundImage: `url(${FoodCover})` }}
        >
          {/* <img src={DietImg} alt="food" className="w-full h-full filter-none" /> */}
        </div>
        <div className="flex-auto md:flex-1 mx-4 max-w-screen-md self-center bg-white rounded-md">
          <div className="text-center my-3">
            <h1 className="text-2xl font-bold">
              Harrist-Bennedict Callculator
            </h1>
            <h5 className="text-md">Count your need calorie here</h5>
          </div>
          <div id="form" className="max-w-lg mx-auto ">
            <div className="relative bg-blue-light rounded-md p-10">
              <FireIcon className="absolute left-0 top-0 h-5 w-5 m-2 text-white" />
              <h2 className="text-white text-center text-3xl">2782 Kcal</h2>
            </div>
            <div>
              <div className="form-control  flex flex-row px-4 py-2 items-center">
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
                  <label class="cursor-pointer label mr-8">
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
              <div className="form-control  flex flex-row px-4 py-2 items-center">
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
                <button className="bg-blue-light text-white font-bold w-full py-2 my-2 rounded-md hover:bg-yellow-light  focus:ring-2 focus:ring-yellow-light">
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
