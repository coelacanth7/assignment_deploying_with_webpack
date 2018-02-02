import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

import WeatherCard from "./WeatherCard";

const WeatherList = props => {
	const { weather } = props;
	if (!Object.keys(weather).length) {
		return null;
	}

	let weatherCards = "";
	if (Object.keys(weather).length) {
		weatherCards = weather.consolidated_weather.map(info => {
			return <WeatherCard info={info} key={info.id} />;
		});
	}

	return (
		<div>
			<h1>{weather.title}</h1>
			<h3>{weather.time}</h3>
			<div>{weatherCards}</div>
		</div>
	);
};

export default WeatherList;
