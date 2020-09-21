import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";

const middlewere = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewere));

export default store;
