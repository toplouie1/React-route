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
	Outlet,
} from "react-router-dom";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/myApps" element={<Navigate to="/learn" />} />
			<Route path="/learn" element={<Learn />}>
				<Route path="courses" element={<Courses />}>
					<Route path=":courseId" element={CourseId} />
				</Route>
				<Route path="bundles" element={<Bundles />} />
			</Route>
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
			<Link to="/learn/courses">Courses</Link>
			<br />
			<Link to="/learn/bundles">Bundles</Link>
			<Outlet />
		</div>
	);
}

function Courses() {
	return (
		<div>
			<h1>This one is My Course List </h1>
			<h4>Courses Card</h4>
		</div>
	);
}
function Bundles() {
	return (
		<div>
			<h1>This one is My Bundle List </h1>
			<h4>Bundles Card</h4>
		</div>
	);
}
function CourseId() {
	return (
		<div>
			<h1>URL Params is : ___ </h1>
		</div>
	);
}
reportWebVitals();
