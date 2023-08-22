import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"
import { accountReducer } from "./Redux/Raducer/accountReducer";
import { bonusReducer } from "./Redux/Raducer/BonusReducer";

export const store=createStore(
    combineReducers({
        amount:accountReducer,
        bonus:bonusReducer
    }),applyMiddleware(logger,thunk)
)