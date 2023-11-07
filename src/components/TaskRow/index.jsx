import { useSelector } from 'react-redux';
import { selectTodoById } from '../../redux/features/todos/todosSelectors';
import ColorSelect from '../ColorSelect';
import RemoveTaskButton from '../RemoveTaskButton';
import TodoCheckbox from '../TodoCheckbox';
import TodoRow from '../TodoRow';

const TaskRow = ({ showBottomBorder, id }) => {
	const todo = useSelector(selectTodoById(id));

	return (
		<div
			key={id}
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				borderBottom: showBottomBorder ? '1px solid #D0D0D0' : '',
			}}
		>
			<div style={{ flex: 1 }}>
				<TodoRow
					left={<TodoCheckbox id={id} />}
					right={todo.text}
				/>
			</div>
			<div style={{ marginRight: '5px', width: '150px' }}>
				<ColorSelect id={id} />
			</div>
			<RemoveTaskButton id={id} />
		</div>
	);
};

export default TaskRow;
