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

const AddFoodMutation = gql`
  mutation addFood($object: calories_tracker_foods_insert_input!) {
    insert_calories_tracker_foods_one(object: $object) {
      id
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

  //Add Mutation
  const [addFood, { data: DataAddFood, loading: LoadingAddFood }] = useMutation(
    AddFoodMutation,
    {
      refetchQueries: [GetFoodsQuery],
    }
  );

  const handleAddFood = (e) => {
    addFood({
      variables: {
        object: {
          name: e.name,
          calorie: e.calorie,
          foodUrl: e.foodUrl,
        },
      },
    });
  };
  console.log("func",handleAddFood);
  console.log("DataGetFoods", DataGetFoods);
  console.log("DataGetFoods Specific", DataGetFoods);
  return  { loadingGetFoods, errGetFoods, DataGetFoods, handleAddFood, LoadingAddFood, DataAddFood };
}