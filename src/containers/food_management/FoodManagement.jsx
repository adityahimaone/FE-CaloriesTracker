import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PlusIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import Styles from "./FoodManagement.module.css";

export default function FoodManagement() {
  return (
    <div className={`h-full  ${Styles.backgroundPattren}`}>
      <Header />
      <div className="max-w-screen-lg h-screen mx-auto">
        <div className={`bg-white p-4 my-8 mx-1 rounded-md shadow-lg`}>
          <div className="flex justify-between mb-4">
            <h1 className="text-lg font-bold">Food Management</h1>
            <a
              href="#add-modal"
              className="flex items-center text-md font-semibold rounded-md bg-blue-light text-white px-2"
            >
              <span>
                <PlusIcon className="h-5 w-5" />
              </span>
              <span>Add Food</span>
            </a>
          </div>
          <div>
            <table className="table w-full table-zebra">
              <thead className="">
                <tr className="">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>Kalori</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <td>1</td>
                  <td>Nasi Goreng</td>
                  <td>
                    <div class="avatar">
                      <div class="rounded-full w-12 h-12">
                        <img
                          src="https://d1uz88p17r663j.cloudfront.net/resized/b51227b42ac8f45a3b9eee1405782f67_AON-Okt-1_944_531.png"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </td>
                  <td>200</td>
                  <td>
                    <div className="flex sm:flex-row flex-col justify-center items-center text-white">
                      <a
                        href="#edit-modal"
                        className="flex flex-grow mx-1 justify-center items-center bg-green-400 px-3 py-1 rounded-md"
                      >
                        <span>
                          <PencilAltIcon className="h-4 w-4" />
                        </span>
                        <span>Edit</span>
                      </a>
                      <a
                        href="/food_management/delete_food"
                        className="flex flex-grow mx-1 justify-center  items-center bg-red-400 px-1 py-1 rounded-md"
                      >
                        <span>
                          <TrashIcon className="h-4 w-4" />
                        </span>
                        <span>Delete</span>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="hover">
                  <td>2</td>
                  <td>Nasi Goreng</td>
                  <td>
                    <div class="avatar">
                      <div class="rounded-full w-12 h-12">
                        <img
                          src="https://d1uz88p17r663j.cloudfront.net/resized/b51227b42ac8f45a3b9eee1405782f67_AON-Okt-1_944_531.png"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </td>
                  <td>200</td>
                  <td className="">
                    <div className="flex sm:flex-row flex-col justify-center items-center text-white">
                      <a
                        href="#edit-modal"
                        className="flex flex-grow mx-1 justify-center items-center bg-green-400 px-3 py-1 rounded-md"
                      >
                        <span>
                          <PencilAltIcon className="h-4 w-4" />
                        </span>
                        <span>Edit</span>
                      </a>
                      <a
                        href="/food_management/delete_food"
                        className="flex flex-grow mx-1 justify-center  items-center bg-red-400 px-1 py-1 rounded-md"
                      >
                        <span>
                          <TrashIcon className="h-4 w-4" />
                        </span>
                        <span>Delete</span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal Add */}
      <div id="add-modal" class="modal">
        <div class="relative modal-box rounded-b-md">
          <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
            <h1 className="text-center text-xl font-bold text-white">
              Input Food
            </h1>
          </div>
          <div className="mt-10">
            <div className="my-2">
              <label className="text-sm font-semibold">Name Food</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="my-2">
              <label className="text-sm font-semibold">Kalori</label>
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>
            <div className="my-2">
              <label className="text-sm font-semibold">Photo</label>
              <input type="file" className="w-full p-2 border rounded-md" />
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
      {/* Modal Edit */}
      <div id="edit-modal" class="modal">
        <div class="relative modal-box rounded-b-md">
          <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
            <h1 className="text-center text-xl font-bold text-white">
              Edit Food
            </h1>
          </div>
          <div className="mt-10">
            <div className="my-2">
              <label className="text-sm font-semibold">Name Food</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="my-2">
              <label className="text-sm font-semibold">Kalori</label>
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>
            <div className="my-2">
              <label className="text-sm font-semibold">Photo</label>
              <input type="file" className="w-full p-2 border rounded-md" />
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
