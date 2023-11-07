import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STATUS_FILTER } from "../../redux/features/filters/filtersActions";

const FilterByStatus = ({ value, label }) => {
	const status = useSelector(state => state.filters.status);

	const dispatch = useDispatch();
	const handleClick = e => {
		const status = e.target.value;
		dispatch(UPDATE_STATUS_FILTER(status));
	};
	return (
		<button
			style={{
				margin: "5px 0",
				display: "block",
				background: "none",
				border: "none",
				outline: "none",
				cursor: "pointer",
				padding: 0,
				color: status === value ? "blue" : "#000",
			}}
			value={value}
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

export default FilterByStatus;
