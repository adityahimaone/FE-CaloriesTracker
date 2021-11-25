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

export default function GqlDashboard() {
  // Get Food History Now
  const {
    loading: LoadingGetHistory,
    error: ErrGetHistory,
    data: DataGetHistory,
  } = useQuery(GetFoodHistory, {
    variables: { id_user: 1 },
  });

  return { LoadingGetHistory, ErrGetHistory, DataGetHistory };
}
