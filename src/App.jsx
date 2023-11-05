import React from "react";
import Banner from "./components/Banner";
import "./App.css";
import Card from "./components/Card";
import TodoInput from "./components/TodoInput";
import TodoRow from "./components/TodoRow";
import TodoCheckbox from "./components/TodoCheckbox";
import { useSelector } from "react-redux";
import { selectTodosAsArray } from "./redux/features/todos/todosSelectors";
import ColorSelect from "./components/ColorSelect";

const App = () => {
	const todoItems = useSelector(selectTodosAsArray);
	console.log(todoItems);

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
					{todoItems.map(item => (
						<div
							key={item.id}
							style={{ width: "100%", display: "flex", alignItems: "center" }}
						>
							<div style={{ flex: 1 }}>
								<TodoRow
									left={<TodoCheckbox id={item.id} />}
									right={item.text}
								/>
							</div>
							<div style={{ marginRight: "20px" }}>
								<ColorSelect id={item.id} />
							</div>
						</div>
					))}
				</Card>
			</div>
		</div>
	);
};

export default App;
