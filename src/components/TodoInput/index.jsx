import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_TODO } from '../../redux/features/todos/todosActions';
const TodoInput = () => {
	const dispatch = useDispatch();
	// Internal state as we only subnit to the store when the user presses enter
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleEnterPress = useCallback(
		(e) => {
			if (e.key === 'Enter') {
				// 1. Dispatch the value of text to the store
				dispatch(CREATE_TODO(text));
				// 2. Clear the input
				setText('');
			}
		},
		[dispatch, text]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleEnterPress);
		return () => {
			document.removeEventListener('keydown', handleEnterPress);
		};
	}, [handleEnterPress]);

	return (
		<input
			type="text"
			placeholder="What needs to be done?"
			style={{
				margin: 0,
				padding: '5px 5px 5px 0',
				border: 0,
				outline: 'none',
				fontSize: '24px',
				width: '100%',
			}}
			onChange={handleChange}
			value={text}
		/>
	);
};

export default TodoInput;
