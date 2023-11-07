import { v4 as uuid } from 'uuid';

// A todo has the following properties
// -- whether it is completed
// -- the text describing the todo
// -- an assigned color to allow for color coding
// -- a unique identifier

// Define the reducer that will return the next state for the todos slice

const initialState = {
	[uuid()]: {
		text: 'Learn React',
		complete: true,
		color: 'red',
	},
	[uuid()]: {
		text: 'Learn Redux',
		complete: false,
	},
};

export default function todosReducer(state = initialState, action) {
	switch (action.type) {
		case 'todos/todoAdded': {
			const text = action.payload;
			const id = uuid();
			const newTodo = {
				text,
				complete: false,
			};
			return {
				...state,
				[id]: newTodo,
			};
		}
		case 'todos/todoToggled': {
			const id = action.payload;
			if (state[id]) {
				return {
					...state,
					[id]: {
						...state[id],
						complete: !state[id].complete,
					},
				};
			} else {
				return state;
			}
		}
		case 'todos/colorUpdated': {
			const { color, id } = action.payload;
			if (state[id]) {
				return {
					...state,
					[id]: {
						...state[id],
						color,
					},
				};
			} else return state;
		}
		case 'todos/todoDeleted': {
			const newState = { ...state };
			delete newState[action.payload];
			return newState;
		}
		case 'todos/allCompleted': {
			const newState = { ...state };
			Object.values(newState).forEach((todo) => {
				todo.complete = true;
			});
			return newState;
		}
		case 'todos/completedCleared': {
			const newState = { ...state };
			for (let id in newState) {
				if (newState[id].complete) {
					delete newState[id];
				}
			}

			return newState;
		}
		default:
			return state;
	}
}
