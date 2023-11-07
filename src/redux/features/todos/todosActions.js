// The actions that a user needs to be able to perform on a todo are
// -- create a new todo
// -- toggle whether a todo is complete
// -- edit the color assigned to the todo
// -- delete a todo
// -- mark all todos as complete
// -- clear all completed todos

// Define the action creators that a user can perform on a todo
export const CREATE_TODO = (text) => ({
	type: 'todos/todoAdded',
	payload: text,
});

export const TOGGLE_TODO = (id) => ({
	type: 'todos/todoToggled',
	payload: id,
});

export const UPDATE_TODO_COLOR = (id, color) => ({
	type: 'todos/colorUpdated',
	payload: { id, color },
});

export const DELETE_TODO = (id) => ({
	type: 'todos/todoDeleted',
	payload: id,
});

export const MARK_ALL_COMPLETED = () => ({
	type: 'todos/allCompleted',
});

export const CLEAR_ALL_COMPLETED = () => ({
	type: 'todos/completedCleared',
});
