import { useSelector } from 'react-redux';
import { selectRemainingTodos } from '../../redux/features/todos/todosSelectors';

const TasksRemaining = () => {
	const remaining = useSelector(selectRemainingTodos);

	return <span>{remaining.length}</span>;
};

export default TasksRemaining;
