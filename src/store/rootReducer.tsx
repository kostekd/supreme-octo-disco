import { combineReducers } from "redux";
import authenticationReducer from "./reducers/authReducer/reducer";
import counterReducer from "./reducers/counterReducer/reducer";

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  counter: counterReducer,
});
