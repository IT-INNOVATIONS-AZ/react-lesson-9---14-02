import React from "react";
import "./style.css";
export function Button({ type, children, onClick }) {
	return (
		<button className={`btn-component btn-${type}`} onClick={onClick}>
			{children}
		</button>
	);
}
