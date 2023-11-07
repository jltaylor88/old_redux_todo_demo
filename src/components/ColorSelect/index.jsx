import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_TODO_COLOR } from '../../redux/features/todos/todosActions';
import { selectTodoById } from '../../redux/features/todos/todosSelectors';

export const colorMap = {
	green: '#00FF00',
	blue: '#0000FF',
	orange: '#FFA500',
	purple: '#800080',
	red: '#FF0000',
};

const colorOptions = Object.keys(colorMap).map((color) => ({
	label: color.charAt(0).toUpperCase() + color.slice(1),
	value: color,
}));

const ColorSelect = ({ id }) => {
	const dispatch = useDispatch();
	const todo = useSelector(selectTodoById(id));

	const handleChange = (e) => {
		const color = e.target.value;
		dispatch(UPDATE_TODO_COLOR(id, color));
	};

	return (
		<select
			style={{
				width: '100%',
				height: 30,
				border: '1px solid #ccc',
				borderRadius: 3,
				outline: 'none',
			}}
			value={todo.color}
			onChange={handleChange}
			defaultValue={undefined}
		>
			<option value={undefined}>Select a color</option>
			{colorOptions.map((option) => (
				<option
					key={option.value}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default ColorSelect;
