// Define the action creators that a user can perform on the filter
export const UPDATE_STATUS_FILTER = status => ({
	type: "filters/statusFilterUpdated",
	payload: status,
});

export const TOGGLE_COLOR_FILTER = color => ({
	type: "filters/colorFilterToggled",
	payload: color,
});
