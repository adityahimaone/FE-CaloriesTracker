import React, { useState } from "react";

export default function ModalAdd(props) {
  // console.log("props form input", props);
  const [state, setState] = useState({
    name: "",
    foodUrl: "https://sc04.alicdn.com/kf/HTB1F8QaMXXXXXc_XFXXq6xXFXXXv.jpg",
    calorie: 0,
  });

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
    setState({
      name: "",
      foodUrl: "https://sc04.alicdn.com/kf/HTB1F8QaMXXXXXc_XFXXq6xXFXXXv.jpg",
      calorie: 0,
    });
  };

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
              //   value={state.foodUrl}
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
