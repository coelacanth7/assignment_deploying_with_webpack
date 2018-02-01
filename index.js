import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Greeting = ({ name }) => <p className="greet">Hello, {name}!</p>;

ReactDOM.render(<Greeting name="Vlad" />, document.getElementById("root"));

