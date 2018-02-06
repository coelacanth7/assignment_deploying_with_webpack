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

const WeatherCard = ({ info }) => {
	if (!Object.keys(info).length) {
		return null;
	}

	return (
		<div>
			<div className="card" style={{ minWidth: "200px", maxWidth: "250px" }}>
				<img
					className="card-img-top"
					src={`https://www.metaweather.com/static/img/weather/${
						info.weather_state_abbr
					}.svg`}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{info.weather_state_name}</h5>
					<h5 className="card-title">{info.applicable_date}</h5>

					<table className="table table-sm">
						<thead>
							<tr>
								<th scope="col">Temp</th>
								<th scope="col">Min</th>
								<th scope="col">Max</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{Math.round(info.the_temp)}</td>
								<td>{Math.round(info.min_temp)}</td>
								<td>{Math.round(info.max_temp)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
