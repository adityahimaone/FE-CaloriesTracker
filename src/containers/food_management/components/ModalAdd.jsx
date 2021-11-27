import React, { useState } from "react";
import { app } from "../../../firebase/firebaseConfig";

export default function ModalAdd(props) {
  const initState = {
    name: "",
    foodUrl: "",
    calorie: 0,
  };
  const [state, setState] = useState(initState);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: state.name,
      foodUrl: state.foodUrl,
      calorie: state.calorie,
    };
    props.addFood(newFood);
    setState(initState);
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
  console.log("modal add", state);
  return (
    <div id="add-modal" class="modal">
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
          </div>
          <div className="my-2">
            <label className="text-sm font-semibold">Photo</label>
            <input
              type="file"
              name="foodUrl"
              onChange={onChangeImage}
              // value={state.foodUrl}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
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
