import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PlusIcon } from "@heroicons/react/solid";
import Styles from "./FoodManagement.module.css";
import TableRow from "./components/TableRow";
import ModalAdd from "./components/ModalAdd";
import gqlFood from "../../graphql/GqlFoodManagement";
import Lottie from "react-lottie";
import animationData from "../../assets/img/loading.json";

export default function FoodManagement(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // console.log("FoodManagement", gqlFood(props.DataGetFoods));
  // console.log("func", handleEditFood);
  // console.log("gqlfood", gqlFood().handleAddFood);
  // console.log("FoodManagement 3", {DataGetFoods: props.DataGetFoods});
  // console.log({DataGetFoods2})
  return (
    <div className={`h-full  ${Styles.backgroundPattren}`}>
      <Header />
      <div className="max-w-screen-lg h-screen mx-auto">
        <div className={`bg-white p-4 my-8 mx-1 rounded-md shadow-lg`}>
          <div className="flex justify-between mb-4">
            <h1 className="text-lg font-bold">Food Management</h1>
            <a
              href="#add-modal"
              className="flex items-center text-md font-semibold rounded-md bg-blue-light text-white px-2"
            >
              <span>
                <PlusIcon className="h-5 w-5" />
              </span>
              <span>Add Food</span>
            </a>
          </div>
          <div>
            <table className="table w-full table-zebra">
              <thead className="">
                <tr className="">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>Kalori</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {gqlFood().DataGetFoods?.calories_tracker_foods.map((food) => (
                  <TableRow key={food.id} food={food} />
                ))}
                {gqlFood().loadingGetFoods ? (
                  <tr className="">
                    <td colspan="5">
                      <Lottie
                        options={defaultOptions}
                        height={300}
                        width={500}
                      />
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
      {/* Modal Add */}
      <ModalAdd addFood={gqlFood().handleAddFood} />
    </div>
  );
}
