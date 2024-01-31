import { combineReducers } from "redux";

import watchlistReducer from "./watchListReducer";
import movieReducer from "./movieReducer";
export const reducers = combineReducers({
    watchlistReducer,
    movieReducer,
});