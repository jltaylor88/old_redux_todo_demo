import { useSelector } from "react-redux";
import { selectOverallFilteredTodoIds } from "../../redux/features/todos/todosSelectors";
import TaskRow from "../TaskRow";

const TodosList = () => {
	const status = useSelector(state => state.filters.status);
	const colors = useSelector(state => state.filters.colors);
	const todoIds = useSelector(selectOverallFilteredTodoIds(status, colors));

	return (
		<div
			style={{
				minHeight: "400px",
				// Grey bottom border
				borderBottom: "1px solid #D0D0D0",
			}}
		>
			{todoIds.map((id, idx) => (
				<TaskRow
					id={id}
					key={id}
					showBottomBorder={idx !== todoIds.length - 1}
				/>
			))}
		</div>
	);
};

export default TodosList;
