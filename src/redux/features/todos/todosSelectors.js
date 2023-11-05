export const selectTodos = state => state.todos;

// Todo: memoize this to prevent new ref every time
export const selectTodosAsArray = state => {
	const todos = state.todos;
	return Object.keys(todos).map(id => ({ id, ...todos[id] }));
};

export const selectTodoById = id => state => {
	return state.todos[id];
};
