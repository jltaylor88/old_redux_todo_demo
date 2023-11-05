const TodoRow = ({ left, right }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				padding: 10,
				backgroundColor: "white",
			}}
		>
			<div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
				{left}
			</div>
			<div style={{ flex: 10, fontSize: "24px" }}>{right}</div>
		</div>
	);
};

export default TodoRow;
