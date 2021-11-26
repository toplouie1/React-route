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
	useParams,
	NavLink,
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
			<Link to="/learn">Learn</Link>
		</div>
	);
}

function Learn() {
	return (
		<div>
			<h1>Learn</h1>
			<Link to="/">Home</Link>
			<h4>This is a learning of react - router </h4>
			<Link to="/learn/courses">Courses</Link>
			<br />
			<Link to="/learn/bundles">Bundles</Link>
			<Outlet />
		</div>
	);
}

function Courses() {
	const courseList = ["React", "Angular", "vue", "node.js"];
	const randomCourseLink =
		courseList[Math.floor(Math.random() * courseList.length)];
	return (
		<div>
			<h1>This one is My Course List </h1>
			<h4>Courses Card</h4>
			<p>
				We have variety of Courses that can be used to help you understand the
				subjects better.
			</p>{" "}
			<NavLink to={`/learn/courses/${randomCourseLink}`}>
				{randomCourseLink}
			</NavLink>
			<Outlet />
		</div>
	);
}

function Bundles() {
	return (
		<div>
			<h1>This one is My Bundle List </h1>
			<h4>Bundles Card</h4>
			<p>
				We have variety of Bundles that can be used to help you understand the
				subjects better
			</p>
		</div>
	);
}

function CourseId() {
	const { courseId } = useParams();
	return (
		<div>
			<h1>URL Params is :{courseId}</h1>
		</div>
	);
}

reportWebVitals();
