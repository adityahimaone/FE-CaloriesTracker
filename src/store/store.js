import { combineReducers } from "redux";
import countCaloriesSlice from "./countCaloriesSlice";
import dashboardSlice from "./dashboardSlice";
import loginSlice from "./loginSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  calories: countCaloriesSlice,
  dashboard: dashboardSlice,
  login: loginSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
export { store, persistor };
