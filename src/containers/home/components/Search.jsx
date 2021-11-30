import React, { useState } from "react";
import Styles from "../Home.module.css";
import { SearchIcon } from "@heroicons/react/solid";
import GqlHome from "../../../graphql/GqlHome";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  // console.log("seacrh", props.searchHandle);
  console.log("seacrh", search);
  console.log("food", props);
  console.log("search result", GqlHome().DataFood);

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchHandle(search);
  };
  return (
    <div
      id="search"
      className={`flex flex-col justify-items-center  text-center bg-blue-400 py-16 md:py-24 bg-fixed ${Styles.backgroundSearch}`}
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Search a Food Here
      </h1>
      <div
        className="relative w-full max-w-screen-xl p-4 mx-auto"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Type Any Food"
          className="w-full h-10 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-light"
        />
        <SearchIcon
          className="absolute top-6 right-7 w-6 h-6 text-black"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}
