import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import userReducer from "./reducer/userReducer";
import tableReducer from "./reducer/tableReducer";


const rootReducer = combineReducers({
  user: userReducer,
  table: tableReducer

});

export const middleware = [thunk, logger];

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(...middleware)
);


export default configureStore;
