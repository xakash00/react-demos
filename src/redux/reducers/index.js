import { combineReducers } from "redux";
import toggleReducer from "../toggleReducer";
import themeReducer from "./themeReduer";
import calculate from "./calcReducer";
import ticketReducer from "./ticketReducer"
const rootReducer = combineReducers({
  toggleReducer,
  themeReducer,
  calculate,
  ticketReducer
});

export default rootReducer;
