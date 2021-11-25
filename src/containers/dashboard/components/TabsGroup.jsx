import React from "react";
import { Tab } from "@headlessui/react";
import CardFood from "./CardFood";

export default function TabsGroup(props) {
  console.log("dari tabs grup", props);
  if (props.loading) {
    return <div>Loading...</div>;
  }
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
          {props.historyData?.calories_tracker_histories.map((item) => {
            <CardFood
              key={item.id}
              data={item.food}
              // calorie={item.food.calorie}
            />;
            // console.log(item.food.foodUrl)
            // console.log("item",item)
          })}
          {/* <CardFood
            image="http://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
            title="Nasi Padang"
            calorie="360"
          /> */}
        </Tab.Panel>
        <Tab.Panel className="bg-gray-50 max-w-full p-2 sm:p-5 border border-gray-300 border-t-0 border-opacity-100 rounded-b-lg h-40">
          <h1>Input Food</h1>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
