// The filtering store has the following properties:
// -- the current status value which can be "all", "completed", or "active". This should default to "all"
// -- the current colors which can be "red", "blue", "green", "orange" or "purple". This should default to an empty array
//

import { createSelector } from "@reduxjs/toolkit";

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
			const color = action.payload;
			const newState = { ...state };

			const colors = [...newState.colors];

			if (colors.includes(color)) {
				newState.colors = [...colors.filter(c => c !== color)];
			} else {
				newState.colors = [...colors, color];
			}

			return newState;
		}
		case "filters/clearFilters": {
			return initialState;
		}
		default:
			return state;
	}
}

export const selectColors = createSelector(
	state => state.filters.colors,
	colors => colors
);
