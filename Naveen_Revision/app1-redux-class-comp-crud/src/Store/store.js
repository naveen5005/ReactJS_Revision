import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(userReducer,applyMiddleware(thunk));