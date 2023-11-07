import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos;

export const selectTodosAsArray = createSelector(selectTodos, (todos) =>
	Object.keys(todos).map((id) => ({ id, ...todos[id] }))
);

export const selectTodoById = (id) => (state) => {
	return state.todos[id];
};

export const selectIds = createSelector(
	(state) => state.todos,
	(todos) => Object.keys(todos)
);

export const selectRemainingTodos = createSelector(selectTodos, (todos) =>
	Object.keys(todos)
		.map((id) => ({ id, ...todos[id] }))
		.filter((todo) => !todo.complete)
);

export const selectTodosIdsByStatus = (filter) =>
	createSelector(
		(state) => state.todos,
		(todos) => {
			const array = Object.keys(todos).map((id) => ({ id, ...todos[id] }));

			switch (filter) {
				case 'active':
					return array.filter((todo) => !todo.complete).map((todo) => todo.id);
				case 'completed':
					return array.filter((todo) => todo.complete).map((todo) => todo.id);
				default:
					return array.map((todo) => todo.id);
			}
		}
	);

export const selectOverallFilteredTodoIds = (filter, colors) =>
	createSelector(
		(state) => state.todos,
		(todos) =>
			Object.keys(todos).filter((id) => {
				const todo = todos[id];
				if (colors && colors.length > 0 && !colors.includes(todo.color)) {
					return false;
				}
				if (filter === 'active') {
					return !todo.complete;
				} else if (filter === 'completed') {
					return todo.complete;
				}
				return true;
			})
	);
