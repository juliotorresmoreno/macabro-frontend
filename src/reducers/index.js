import { combineReducers } from "redux";
import auth from "./auth";
import countries from "./countries";
import business from "./business";

export default combineReducers({
    auth, countries, business
});