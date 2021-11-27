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

const EditFoodMutation = gql`
  mutation editFood($id: Int!, $calorie: Int, $foodUrl: String, $name: String) {
    update_calories_tracker_foods_by_pk(
      pk_columns: { id: $id }
      _set: { calorie: $calorie, foodUrl: $foodUrl, name: $name }
    ) {
      id
      name
      foodUrl
      calorie
    }
  }
`;

const DeleteFoodMutation = gql`
  mutation deleteFood($id: Int!) {
    delete_calories_tracker_foods(where: { id: { _eq: $id } }) {
      affected_rows
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

  //Add Food Mutation
  const [
    addFood,
    { data: DataAddFood, loading: LoadingAddFood, error: ErrAddFood },
  ] = useMutation(AddFoodMutation, {
    refetchQueries: [GetFoodsQuery],
  });

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

  //Edit Food Mutation
  const [
    editFood,
    { data: DataEditFood, loading: LoadingEditFood, error: ErrEditFood },
  ] = useMutation(EditFoodMutation, {
    refetchQueries: [GetFoodsQuery],
  });

  const handleEditFood = (id, e) => {
    editFood({
      variables: {
        id,
        calorie: e.calorie,
        foodUrl: e.foodUrl,
        name: e.name,
      },
    });
  };

  //Delete Food
  const [
    deleteFood,
    { data: DataDeleteFood, loading: LoadingDeleteFood, error: ErrDeleteFood },
  ] = useMutation(DeleteFoodMutation, {
    refetchQueries: [GetFoodsQuery],
  });

  const handleDeleteFood = (id) => {
    deleteFood({
      variables: {
        id,
      },
    });
  };

  console.log("func", handleAddFood);
  console.log("DataGetFoods", DataGetFoods);
  console.log("DataGetFoods Specific", DataGetFoods);

  return {
    loadingGetFoods,
    DataGetFoods,
    handleAddFood,
    LoadingAddFood,
    LoadingDeleteFood,
    LoadingEditFood,
    handleEditFood,
    handleDeleteFood,
  };
}
