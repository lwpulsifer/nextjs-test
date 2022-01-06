import { useState } from "react";

export default function useHoverState() {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const hoverOn = () => setIsHovered(true);
	const hoverOff = () => setIsHovered(false);

	const eventListeners = {
		onMouseEnter: hoverOn,
		onMouseLeave: hoverOff,
		onFocus: hoverOn,
		onBlur: hoverOff,
		onTouchStart: hoverOn,
		onTouchEnd: hoverOff,
	};

	return {
		isHovered,
		eventListeners,
	};
}
