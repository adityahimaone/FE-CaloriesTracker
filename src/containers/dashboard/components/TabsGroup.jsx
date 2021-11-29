import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import CardFood from "./CardFood";
import Lottie from "react-lottie";
import animationData from "../../../assets/img/loading.json";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setDashboard, setFoodIntake } from "../../../store/dashboardSlice";

export default function TabsGroup(props) {
  const dispatch = useDispatch();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [state, setState] = useState({ selectFood: 0 });

  const id_user = 1;
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  let newState = parseInt(state.selectFood);
  const onSubmit = (e) => {
    e.preventDefault();
    const newHistory = {
      id_user: id_user,
      id_food: newState,
    };
    props.addHistory(id_user, newHistory);
    setState({ selectFood: 0 });
  };

  //save sum calorie to local storage
  let sumCalorie = 0;
  const sumCalorieFood = (calorie) => {
    sumCalorie += calorie;
    dispatch(setDashboard(sumCalorie));
  };

  //save total history to local storage
  const sumFoodIntake = () => {
    let items = props.historyData?.calories_tracker_histories
      ? Object.keys(props.historyData.calories_tracker_histories).length
      : 0;
    dispatch(setFoodIntake(items));
  };
  sumFoodIntake();
  return (
    <Tab.Group>
      <Tab.List className=" w-full tabs">
        <Tab
          className={({ selected }) =>
            selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
          }
        >
          Histories
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
          }
        >
          Input Food
        </Tab>
        <div className="flex-grow tab tab-lifted" />
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="bg-white max-w-full p-2 sm:p-2 border border-gray-300 border-t-0  rounded-b-lg border-opacity-100">
          {props.historyData?.calories_tracker_histories.map((item) => (
            <>
              <CardFood
                key={item.id}
                title={item.food.name}
                image={item.food.foodUrl}
                calorie={item.food.calorie}
              />
              {sumCalorieFood(item.food.calorie)}
            </>
          ))}
          {props.loading ? (
            <div className="mx-auto">
              <Lottie options={defaultOptions} height={300} width={500} />
            </div>
          ) : null}
        </Tab.Panel>
        <Tab.Panel className="bg-gray-50 max-w-full p-2 sm:p-5 border border-t-0 border-opacity-100 rounded-b-lg h-60 items-center">
          <div className="mx-auto max-w-xl" onSubmit={onSubmit}>
            <div className="form-control flex flex-row px-4 py-2 items-center justify-items-center ">
              <div className="flex-none mr-10 flex">
                <label className="label">
                  <span className="label-text font-semibold">Input Food</span>
                </label>
              </div>
              <div className="flex-auto flex-grow">
                <select
                  class="select select-bordered w-full select-sm"
                  onChange={onChange}
                  name="selectFood"
                >
                  <option disabled="" selected="">
                    Choose Food
                  </option>
                  {props.foodData?.calories_tracker_foods.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={onSubmit}
              class="w-full bg-blue-light border rounded-md py-2 text-white font-medium focus:ring-4 focus:ring-yellow-light focus:ring-opacity-50 hover:bg-yellow-light shadow-lg"
            >
              Submit
            </button>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

TabsGroup.propTypes = {
  dataHistory: PropTypes.array,
};
