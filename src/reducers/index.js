import { combineReducers } from "redux";
import auth from "./auth";
import countries from "./countries";

export default combineReducers({
    auth, countries
});