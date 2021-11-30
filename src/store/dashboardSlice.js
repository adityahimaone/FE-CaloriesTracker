import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  id: 1,
  calorieSum: 0,
  foodIntake: 0,
};

export const dashboardSlice = createSlice({
  name: "calories",
  initialState: initialValue,
  reducers: {
    setDashboard: (state, action) => {
      let item = action.payload;
      state.calorieSum = item;
    },
    setFoodIntake: (state, action) => {
      let item = action.payload;
      state.foodIntake = item;
    },
  },
});

export const { setDashboard, setFoodIntake } = dashboardSlice.actions;
export default dashboardSlice.reducer;
