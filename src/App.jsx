import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { colorMap } from "./components/ColorSelect";
import FilterByStatus from "./components/FilterByStatus";
import TasksRemaining from "./components/TasksRemaining";
import TodoInput from "./components/TodoInput";
import TodoRow from "./components/TodoRow";
import TodosList from "./components/TodosList";
import {
	CLEAR_ALL_COMPLETED,
	MARK_ALL_COMPLETED,
} from "./redux/features/todos/todosActions";
import ColorInput from "./components/ColorInput";
import ColorsInputs from "./components/ColorsInputs";
import { CLEAR_FILTERS } from "./redux/features/filters/filtersActions";

const App = () => {
	const dispatch = useDispatch();
	const handleMarkAllAsCompleted = () => {
		dispatch(MARK_ALL_COMPLETED());
	};
	const handleClearCompleted = () => {
		dispatch(CLEAR_ALL_COMPLETED());
	};

	return (
		<div style={{ minHeight: "100vh", backgroundColor: "#F0F0F0" }}>
			<Banner />
			<h2 style={{ textAlign: "center" }}>Todos</h2>
			<div
				style={{
					padding: "0 20 10",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Card>
					<TodoRow right={<TodoInput />} />
					<TodosList />
					<div style={{ display: "flex", padding: "20px" }}>
						<div style={{ flex: 1, textAlign: "center" }}>
							<h3>Actions</h3>
							<button
								style={{
									backgroundColor: "blue",
									color: "white",
									padding: "5px",
									border: "none",
									outline: "none",
									borderRadius: "5px",
									marginBottom: "10px",
								}}
								onClick={handleMarkAllAsCompleted}
							>
								Mark all as completed
							</button>
							<button
								style={{
									backgroundColor: "blue",
									color: "white",
									padding: "5px",
									border: "none",
									outline: "none",
									borderRadius: "5px",
									marginBottom: "10px",
								}}
								onClick={handleClearCompleted}
							>
								Clear completed
							</button>
						</div>
						<div
							style={{
								flex: 3,
								display: "flex",
								justifyContent: "space-evenly",
							}}
						>
							<div style={{ textAlign: "center" }}>
								<h3>Remaining Todos</h3>
								<TasksRemaining />
							</div>
							<div>
								<h3>Filter By Status</h3>
								<FilterByStatus value='all' label='All' />
								<FilterByStatus value='active' label='Active' />
								<FilterByStatus value='completed' label='Completed' />
							</div>
							<div>
								<h3>Filter By Color</h3>
								<ColorsInputs />
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default App;
