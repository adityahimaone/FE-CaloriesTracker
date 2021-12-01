import React from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const login = gql`
  query login($email: String, $pass: String) {
    calories_tracker_users(
      where: { email: { _eq: $email }, password: { _eq: $pass } }
    ) {
      id
      name
      weight
      height
      calorieNeed
      avatarUrl
      email
    }
  }
`;

export default function GqlLogin() {
  const [loginAcc, { loading, error, data }] = useLazyQuery(login);
  return {
    loginAcc,
    loading,
    data,
  };
}
