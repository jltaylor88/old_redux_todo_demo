const Card = ({ children }) => {
	return (
		<div
			style={{
				width: "100%",
				maxWidth: "1000px",
				margin: 0,
				padding: 0,
				boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.14)",
				borderRadius: 3,
				backgroundColor: "white",
			}}
		>
			{children}
		</div>
	);
};

export default Card;
