import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "I am Nested H1 Tag"),
		React.createElement("h2", {}, "I am Nested H2 Tag"),
	])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Hello World From React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
