import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";

const getFoodLazyQuery = gql`
  query MyQuery($food_like: String) {
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

  const [
    getFoodLazy,
    {
      loading: LoadngFoodLazyQuery,
      data: DataFoodLazyQuery,
      error: ErrorFoodLazyQuery,
    },
  ] = useLazyQuery(getFoodLazyQuery);

  const GetLazyFood = () => {
    getFoodLazy({ variables: { food_like: "pizza" } });
  };

  console.log("getFoodLazy", DataFoodLazyQuery);

  const onGetData = (keyword) => {
    // keyword = "pizza";
    getFood({ variables: { food_like: keyword } });
    localStorage.setItem("searchFood", DataFood);
  };
  // GetLazyFood();
  console.log("result from gql", DataFood);
  console.log("result from gql get lazy food", DataFoodLazyQuery);

  // const useApolloClient()
  //   .query({
  //     query: `query MyQuery($food_like: String!) {
  //     calories_tracker_foods(where: { name: { _ilike: $food_like } }) {
  //       id
  //       name
  //       foodUrl
  //       calorie
  //     }
  //   }`,
  //     variables: {
  //       food_like: keyword,
  //     },
  //   })
  //   .then((response) => {});

  return { onGetData, LoadingFood, DataFood, ErrorFood, DataFoodLazyQuery };
}
