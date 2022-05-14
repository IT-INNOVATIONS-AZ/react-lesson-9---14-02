import React, { useState } from "react";

export function MainPage() {
	const [numberOne, setNumberOne] = useState(0);
	const [numberTwo, setNumberTwo] = useState(0);
	const [sum, setSum] = useState(0);

	const getSum = () => {
		setSum(parseInt(numberOne) + parseInt(numberTwo));
	};

	return (
		<div>
			<Inputs onChangeOne={setNumberOne} onChangeTwo={setNumberTwo} />
			<Results numberOne={numberOne} numberTwo={numberTwo} sum={sum} />
			<button onClick={getSum}>Get Sum</button>
		</div>
	);
}

function Inputs({ onChangeOne, onChangeTwo }) {
	return (
		<div>
			<input type='number' onChange={(e) => onChangeOne(e.target.value)} />
			<input type='number' onChange={(e) => onChangeTwo(e.target.value)} />
		</div>
	);
}

function Results({ numberOne, numberTwo, sum }) {
	return (
		<div>
			<p>number one:{numberOne}</p>
			<p>number two:{numberTwo}</p>
			<h1>{sum}</h1>
		</div>
	);
}
