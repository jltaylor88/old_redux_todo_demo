import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_TODO } from '../../redux/features/todos/todosActions';
import { selectTodos } from '../../redux/features/todos/todosSelectors';

const TodoCheckbox = ({ id }) => {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);

	const isChecked = todos[id] && todos[id].complete;

	const handleToggle = () => {
		dispatch(TOGGLE_TODO(id));
	};

	return (
		<div>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleToggle}
			/>
		</div>
	);
};

export default TodoCheckbox;
