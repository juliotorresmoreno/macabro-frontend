import { combineReducers } from "redux";
import auth from "./auth";
import countries from "./countries";
import business from "./business";
import paymentMethods from "./payment-methods";
import instances from "./instances";

export default combineReducers({
    auth, countries, business, paymentMethods, instances
});