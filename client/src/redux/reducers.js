import itemsReducer from "./modules/items";
import { combineReducers } from "redux";

export default combineReducers({
  items: itemsReducer
});
