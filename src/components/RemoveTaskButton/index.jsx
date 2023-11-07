import { useDispatch } from 'react-redux';
import { DELETE_TODO } from '../../redux/features/todos/todosActions';

const RemoveTaskButton = ({ id }) => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(DELETE_TODO(id));
	};

	return (
		<button
			style={{
				backgroundColor: '#764ABC',
				color: 'white',
				border: 'none',
				outline: 'none',
				padding: '5px',
				borderRadius: '2px',
				marginRight: '5px',
				cursor: 'pointer',
			}}
			onClick={onClick}
		>
			Remove
		</button>
	);
};

export default RemoveTaskButton;
