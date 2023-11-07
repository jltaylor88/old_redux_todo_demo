import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_COLOR_FILTER } from "../../redux/features/filters/filtersActions";
import { createSelector } from "@reduxjs/toolkit";
import { selectColors } from "../../redux/features/filters/filtersSlice";

const ColorInput = ({ color }) => {
	const dispatch = useDispatch();

	const isSelected = useSelector(state =>
		state.filters.colors.includes(color.value)
	);
	console.log(color, isSelected);

	const onChange = () => {
		dispatch(TOGGLE_COLOR_FILTER(color.value));
	};

	return (
		<div
			key={color.value}
			style={{
				display: "flex",

				alignItems: "center",
			}}
		>
			<input
				onChange={onChange}
				checked={isSelected}
				type='checkbox'
				id={color.value}
			/>
			<div
				style={{
					height: "10px",
					width: "20px",
					borderRadius: "2px",
					backgroundColor: color.value,
					marginRight: "10px",
				}}
			></div>
			<label htmlFor={color.value}>{color.label}</label>
		</div>
	);
};

export default ColorInput;
