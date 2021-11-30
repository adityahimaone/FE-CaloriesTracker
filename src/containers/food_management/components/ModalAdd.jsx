import React, { useState } from "react";
import { app } from "../../../firebase/firebaseConfig";

export default function ModalAdd(props) {
  const initState = {
    name: "",
    foodUrl: "",
    calorie: 0,
  };

  const initErr = {
    name: "",
    foodUrl: "",
    calorie: "",
  };

  const [state, setState] = useState(initState);
  const [err, setErr] = useState(initErr);

  const regexName = /^[A-Za-z ]*$/;
  const regexCalorie = /^(\d{1}|\d{2}|\d{3}|\d{4})$/;

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      if (regexName.test(value)) {
        setErr({ ...err, name: "" });
      } else {
        setErr({ ...err, name: "Nama makanan harus berupa huruf" });
      }
    }

    if (name === "calorie") {
      if (regexCalorie.test(value)) {
        setErr({ ...err, calorie: "" });
      } else {
        setErr({ ...err, calorie: "Kalori makanan harus 1 - 4 digit" });
      }
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: state.name,
      foodUrl: state.foodUrl,
      calorie: state.calorie,
    };
    if (err.name === "" && err.calorie === "" && state.foodUrl !== "") {
      props.addFood(newFood);
      setState(initState);
    }
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    console.log("file = ", file);
    console.log("storageRef = ", storageRef);
    console.log("fileRef = ", fileRef);
    fileRef.put(file).then((e) => {
      console.log("Uploaded a file");
      console.log("didalam e = ", e);
      e.ref.getDownloadURL().then(function (downloadURL) {
        console.log("File available at", downloadURL);
        setState({
          ...state,
          foodUrl: downloadURL,
        });
      });
    });
  };

  return (
    <div id="add-modal" className="modal">
      <div class="relative modal-box rounded-b-md">
        <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
          <h1 className="text-center text-xl font-bold text-white">
            Input Food
          </h1>
        </div>
        <div className="mt-10" onSubmit={onSubmit}>
          <div className="my-2">
            <label className="text-sm font-semibold">Name Food</label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={onChange}
              className="w-full p-2 border rounded-md"
            />
            {err.name ? (
              <span className="text-red-500 text-xs">{err.name}</span>
            ) : null}
          </div>
          <div className="my-2">
            <label className="text-sm font-semibold">Kalori</label>
            <input
              type="number"
              name="calorie"
              value={state.calorie}
              onChange={onChange}
              className="w-full p-2 border rounded-md"
            />
            {err.calorie ? (
              <span className="text-red-500 text-xs">{err.calorie}</span>
            ) : null}
          </div>
          <div className="my-2">
            <label className="text-sm font-semibold">Photo</label>
            <input
              type="file"
              name="foodUrl"
              onChange={onChangeImage}
              className="w-full p-2 border rounded-md"
            />
            {state.foodUrl === "" ? (
              <span className="text-red-500 text-xs">Image belum diuploud</span>
            ) : (
              <span className="text-green-500 text-xs">
                Image sudah diuploud
              </span>
            )}
          </div>
        </div>
        {err.name || err.calorie || state.foodUrl === "" ? (
          <div class="alert alert-error rounded-md">
            <div class="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-6 h-6 mx-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                ></path>
              </svg>
              <label>Input masih belum lengkap</label>
            </div>
          </div>
        ) : null}
        <div class="modal-action">
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
