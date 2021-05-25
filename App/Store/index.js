import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

// Initial State
const initialState = {};

// Define middleware
const middleware = [thunk];

// Create Store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
