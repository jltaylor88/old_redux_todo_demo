import ColorInput from "../ColorInput";
import { colorMap } from "../ColorSelect";

const colors = Object.keys(colorMap).map(color => ({
	label: color.charAt(0).toUpperCase() + color.slice(1),
	value: color,
}));

const ColorsInputs = () => {
	return (
		<>
			{colors.map(color => (
				<ColorInput key={color.value} color={color} />
			))}
		</>
	);
};

export default ColorsInputs;
