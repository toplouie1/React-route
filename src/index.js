import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
} from "react-router-dom";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/myapps" element={<Navigate to="/learn" />} />
			<Route path="/learn" element={<Learn />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);

function Home() {
	return (
		<div>
			<h1>Home route</h1>
		</div>
	);
}

function Learn() {
	return (
		<div>
			<h1>Learn</h1>
			<h4>This is a learning of react - router </h4>
			<Link to="/learn/course">courses</Link>
			<Link to="/learn/bundle">bundle</Link>
		</div>
	);
}
reportWebVitals();
