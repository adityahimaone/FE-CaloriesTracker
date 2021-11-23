import React from 'react'
import Styles from "../Home.module.css";

export default function Search() {
    return (
        <div
          id="search"
          className={`flex flex-col justify-items-center  text-center bg-blue-400 py-16 md:py-24 bg-fixed ${Styles.backgroundSearch}`}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Search a Food Here
          </h1>
          <div className="w-full max-w-screen-xl p-4 mx-auto">
            <input
              type="text"
              placeholder="Type Any Food"
              className="w-full h-10 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-light"
            />
          </div>
        </div>
    )
}
