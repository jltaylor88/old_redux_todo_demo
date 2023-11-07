const delayDoneMiddleware = (storeApi) => (next) => async (action) => {
	if (action.type === 'todos/todoToggled') {
		await new Promise((resolve) => setTimeout(resolve, 5000));
	}

	return next(action);
};

export default delayDoneMiddleware;
