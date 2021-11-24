import React from "react";

export default function ModalEdit(props) {
  console.log(props, "modal edit");
  return (
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
            <input
              type="text"
              // placeholder={name}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="my-2">
            <label className="text-sm font-semibold">Kalori</label>
            <input
              type="number"
              // placeholder={calorie}
              className="w-full p-2 border rounded-md"
            />
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
  );
}
