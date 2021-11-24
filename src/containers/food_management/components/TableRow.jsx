import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import ModalEdit from "./ModalEdit";

export default function TableRow(props) {
  const { id, name, foodUrl, calorie } = props.food;
  console.log(props.editFood, "tabel row");
  return (
    <tr className="hover">
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <div class="avatar">
          <div class="rounded-full w-12 h-12">
            <img
              src={foodUrl}
              className="object-cover object-center"
              alt={name}
            />
          </div>
        </div>
      </td>
      <td>{calorie}</td>
      <td>
        <div className="flex sm:flex-row flex-col justify-center items-center text-white">
          <ModalEdit food={props.food}/>
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
  );
}
