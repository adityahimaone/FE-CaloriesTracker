import React from "react";
import { gql, useQuery, useMutation, useSubscription } from "@apollo/client";

const GetFoodsQuery = gql`
  query getAllFoods {
    calories_tracker_foods {
      id
      name
      calorie
      foodUrl
    }
  }
`;

export default function GqlFoodManagement() {
  //Get Query
  const {
    loading: loadingGetFoods,
    error: errGetFoods,
    data: DataGetFoods,
  } = useQuery(GetFoodsQuery);
  console.log("DataGetFoods", DataGetFoods);
  console.log("DataGetFoods Specific", DataGetFoods);
  return { loadingGetFoods, errGetFoods, DataGetFoods };
}

