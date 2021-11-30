import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";

const getFoodLazyQuery = gql`
  query MyQuery($food_like: String!) {
    calories_tracker_foods(where: { name: { _ilike: $food_like } }) {
      id
      name
      foodUrl
      calorie
    }
  }
`;

export default function GqlHome() {
  const [getFood, { loading: LoadingFood, data: DataFood, error: ErrorFood }] =
    useLazyQuery(getFoodLazyQuery);

  if (ErrorFood) {
    console.log("error", ErrorFood);
  }

  const onGetData = (keyword) => {
    // keyword = "pizza";
    getFood({ variables: { food_like: keyword } });
  };
  console.log("result from gql", DataFood);

  return { onGetData, LoadingFood, DataFood, ErrorFood };
}
