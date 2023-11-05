import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	filters: filtersReducer,
	todos: todosReducer,
});

export default rootReducer;
