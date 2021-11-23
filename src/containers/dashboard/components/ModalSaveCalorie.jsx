import React from "react";

export default function ModalSaveCalorie() {
  return (
    <div id="save-calorie-modal" className="modal">
      <div className="relative modal-box rounded-b-md">
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
                  <span className="label-text font-semibold">Berat Badan</span>
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
                  <span className="label-text font-semibold">Tinggi Badan</span>
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
  );
}
