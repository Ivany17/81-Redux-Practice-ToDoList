import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toDoListReducer from "./toDoListReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    toDoList: toDoListReducer,
})

export default rootReducer;