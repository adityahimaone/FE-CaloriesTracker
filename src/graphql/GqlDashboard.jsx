import React from "react";
import { gql, useQuery, useMutation, useSubscription } from "@apollo/client";

const GetFoodHistory = gql`
  query MyQuery2($id_user: Int!) {
    calories_tracker_histories(
      where: { id_user: { _eq: $id_user }, date: { _eq: "now()" } }
    ) {
      food {
        calorie
        foodUrl
        name
        id
      }
      id
    }
  }
`;

const GetUser = gql`
  query getUser($id_user: Int!) {
    calories_tracker_users(where: { id: { _eq: $id_user } }) {
      id
      name
      weight
      height
      calorieNeed
      avatarUrl
    }
  }
`;

const AddHistory = gql`
  mutation addHistories($object: calories_tracker_histories_insert_input!) {
    insert_calories_tracker_histories_one(object: $object) {
      id
    }
  }
`;

export default function GqlDashboard() {
  // Get Food History Now
  const {
    loading: LoadingGetHistory,
    error: ErrGetHistory,
    data: DataGetHistory,
  } = useQuery(GetFoodHistory, {
    variables: { id_user: 1 },
  });

  // Get User
  const {
    loading: LoadingGetUser,
    error: ErrGetUser,
    data: DataGetUser,
  } = useQuery(GetUser, {
    variables: { id_user: 1 },
  });

  // Add Food History
  const [AddHistoryMutation, { loading: LoadingAddHistory }] = useMutation(
    AddHistory,
    {
      refetchQueries: [GetFoodHistory],
    }
  );

  const handleAddHistory = (id_user, food) => {
    AddHistoryMutation({
      variables: {
        object: {
          id_user: id_user,
          id_food: food.id,
          date: "now()",
        },
      },
    });
  };

  return {
    LoadingGetHistory,
    ErrGetHistory,
    DataGetHistory,
    LoadingGetUser,
    ErrGetUser,
    DataGetUser,
    handleAddHistory,
  };
}
