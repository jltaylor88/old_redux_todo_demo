// The filtering store has the following properties:
// -- the current status value which can be "all", "completed", or "active". This should default to "all"
// -- the current colors which can be "red", "blue", "green", "orange" or "purple". This should default to an empty array
//

const initialState = {
	status: "all",
	colors: [],
};

// Define the filters reducer
export default function filtersReducer(state = initialState, action) {
	switch (action.type) {
		case "filters/statusFilterUpdated": {
			return {
				...state,
				status: action.payload,
			};
		}
		case "filters/colorFilterToggled": {
			let { colors } = state;
			const { payload: color } = action;
			const index = colors.indexOf(color);

			if (index >= 0) {
				colors.splice(index, 1);
			} else {
				colors.push(color);
			}

			return {
				...state,
				colors,
			};
		}
		default:
			return state;
	}
}
