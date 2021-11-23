import React from 'react'
import FoodCover from "../../../assets/img/food-cover.png";

export default function BannerImg() {
    return (
        <div
          className="relative flex-1 bg-local  bg-cover bg-center"
          style={{ backgroundImage: `url(${FoodCover})` }}
        >
          {/* <img src={DietImg} alt="food" className="w-full h-full filter-none" /> */}
        </div>
    )
}
