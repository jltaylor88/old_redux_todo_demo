import React from "react";
import store from "../../redux/store";
import { TOGGLE_TODO } from "../../redux/features/todos/todosActions";
import { useDispatch, useSelector } from "react-redux";

const TodoCheckbox = ({ id }) => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);

	const isChecked = todos[id] && todos[id].complete;

	const handleToggle = () => {
		dispatch(TOGGLE_TODO(id));
	};

	return (
		<div>
			<input type='checkbox' checked={isChecked} onChange={handleToggle} />
		</div>
	);
};

export default TodoCheckbox;
