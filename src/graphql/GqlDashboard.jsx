import React from "react";
import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";

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

const EditCalorieNeed = gql`
  mutation editCalorieNeed(
    $calorieNeed: Int!
    $height: Int!
    $weight: Int!
    $id_user: Int!
  ) {
    update_calories_tracker_users(
      where: { id: { _eq: $id_user } }
      _set: { calorieNeed: $calorieNeed, height: $height, weight: $weight }
    ) {
      affected_rows
      returning {
        id
        calorieNeed
        weight
        height
      }
    }
  }
`;

const GetCountHistory = gql`
  query countHistory {
    calories_tracker_histories_aggregate(where: { date: { _eq: "now()" } }) {
      aggregate {
        count
      }
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
          id_food: food.id_food,
          date: "now()",
        },
      },
    });
  };

  // Update Calorie Need
  const [EditCalorieNeedMutation, { loading: LoadingEditCalorieNeed }] =
    useMutation(EditCalorieNeed, {
      refetchQueries: [GetUser],
    });

  const handleEditCalorieNeed = (id_user, e) => {
    EditCalorieNeedMutation({
      variables: {
        id_user,
        calorieNeed: e.calorieNeed,
        weight: e.weight,
        height: e.height,
      },
    });
  };

  // Get Count History
  const {
    loading: LoadingGetCountHistory,
    error: ErrGetCountHistory,
    data: DataGetCountHistory,
  } = useQuery(GetCountHistory);

  return {
    LoadingGetHistory,
    ErrGetHistory,
    DataGetHistory,
    LoadingGetUser,
    ErrGetUser,
    DataGetUser,
    handleAddHistory,
    handleEditCalorieNeed,
    DataGetCountHistory,
  };
}
