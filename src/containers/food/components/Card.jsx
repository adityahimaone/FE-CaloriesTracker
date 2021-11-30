import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div
      id="card"
      className="flex flex-col flex-grow bg-white rounded-xl shadow-lg m-2 transform transition-all hover:scale-105"
    >
      <div>
        <img
          src={props.img}
          alt="food"
          className=" h-64 w-full object-cover object-center rounded-t-xl filter-none"
        />
      </div>
      <div className="m-4">
        <h2 className="text-3xl font-semibold my-2">{props.title}</h2>
        <h5 className="text-xl">+{props.calorie}</h5>
      </div>
    </div>
  );
}

Card.propTypes = {
  FoodImg: PropTypes.string,
};
