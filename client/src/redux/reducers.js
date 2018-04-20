import itemsReducer from "./modules/items";
import { combineReducers } from "redux";
// import profileReducer from "./modules/profiles";

export default combineReducers({
  itemsData: itemsReducer
  // profileItems: profileReducer
});
