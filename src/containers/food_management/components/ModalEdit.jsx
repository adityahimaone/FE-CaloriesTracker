import React, { useState } from "react";
import { app } from "../../../firebase/firebaseConfig";
import Loading from "../../../components/Loading";
import AlertInput from "../../../components/AlertInput";

export default function ModalEdit(props) {
  const { id, name, foodUrl, calorie } = props.food;

  const initState = {
    name: "",
    foodUrl: "",
    calorie: 0,
  };

  const initErr = {
    name: "",
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
      props.editFood(id, newFood);
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
    <div id={`edit-modal${id}`} className="modal">
      <div className="relative modal-box rounded-b-md">
        <div className="bg-blue-400 absolute inset-x-0 top-0 py-3 rounded-t-md">
          <h1 className="text-center text-xl font-bold text-white">
            Edit Food
          </h1>
        </div>
        <div className="mt-10" onSubmit={onSubmit}>
          <div className="my-2">
            <label className="text-sm font-semibold">Name Food</label>
            <input
              type="text"
              name="name"
              placeholder={name}
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
              placeholder={calorie}
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
          <AlertInput />
        ) : null}
        {props.loadingEdit ? <Loading /> : null}
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
