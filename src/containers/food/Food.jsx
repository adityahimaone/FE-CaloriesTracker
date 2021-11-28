import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FoodImg from "../../assets/img/pizza.png";
import Styles from "./Food.module.css";
import Card from "./components/Card";
import gqlFood from "../../graphql/GqlFoodManagement";

export default function Food() {
  return (
    <div className={Styles.backgroundPattren}>
      <Header />
      <div className={`mb-10 mx-4`}>
        <div className="my-4">
          <h1 className="text-2xl text-center font-bold md:text-4xl w-32 md:w-40  rounded-b-sm border-b-4 border-blue-400  mx-auto">
            Food List
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-screen-xl mx-auto">
          {gqlFood().DataGetFoods?.calories_tracker_foods.map((food) => (
            <Card
              key={food.id}
              img={food.foodUrl}
              title={food.name}
              calorie={food.calorie}
            />
          ))}
          {/* <Card img={FoodImg} title="Bukan Pizza" calorie="350" /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
