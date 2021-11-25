import React from "react";

export default function ModalDelete(props) {
  const { id, name } = props.food;
  const onSubmit = (e) => {
    e.preventDefault();
    props.deleteFood(id);
  };
  return (
    <div id={`delete-modal${id}`} className="modal">
      <div className="relative modal-box rounded-b-md">
        <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
          <h1 className="text-center text-xl font-bold text-white">
            Delete Food
          </h1>
        </div>
        <div className="mt-10" onSubmit={onSubmit}>
          <h1>{`Apakah anda yakin ingin delete ${name} dengan id ${id}`}</h1>
        </div>
        <div class="modal-action">
          <button
            onClick={onSubmit}
            class="bg-green-400 text-white py-2 px-3 rounded-md hover:bg-green-500"
          >
            Delete
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
