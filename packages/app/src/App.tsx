import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@todcode/components";
import "./style.scoped.scss";

function App() {
	const [count, setCount] = useState(0);

	console.log(Button);
	return (
		<div className="App bg-red-600">
			<header className="App-header bg-red-500">
				<img src={logo} className="App-logo" alt="logo" />
				Your count is {count}
				<Button onClick={() => setCount((prev) => ++prev)} />
			</header>
		</div>
	);
}

export default App;
