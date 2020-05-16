import { combineReducers } from "redux";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  themeChanger: themeReducer,
});

export default rootReducer;
