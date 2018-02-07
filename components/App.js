import React, { Component } from "react";
import { Jumbotron, Container, FormGroup, Label, Input } from "reactstrap";
import fetch from "isomorphic-fetch";

import SearchResults from "./SearchResults";
import Spinner from "./Spinner";
import WeatherList from "./WeatherList";

const baseUrl = "https://www.metaweather.com/api/location/";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
	constructor() {
		super();
		this.state = {
			weather: {},
			searchResults: [],
			noResultsMsg: "",
			isFetching: false
		};
		this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
		this.onClickSearchResult = this.onClickSearchResult.bind(this);
		this.fetchLattLongLocation = this.fetchLattLongLocation.bind(this);
	}

	componentDidMount() {
		this.fetchLocationOnLoad(this.fetchLattLongLocation);
	}

	handleSearchKeyUp(e) {
		if (e.key === "Enter") {
			console.log(e.target.value);
			this.fetchLocationsOnSearch(e.target.value);
		}
	}

	onClickSearchResult(e, woeid) {
		console.log(woeid);
		this.fetchLocationQuery(woeid);
	}

	fetchLocationOnLoad(apiCallback) {
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		function success(pos) {
			var crd = pos.coords;

			console.log("Your current position is:");
			console.log(`Latitude : ${crd.latitude}`);
			console.log(`Longitude: ${crd.longitude}`);
			console.log(`More or less ${crd.accuracy} meters.`);

			apiCallback(crd.latitude, crd.longitude);
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	}

	fetchLattLongLocation(latt, long) {
		this.setState({ isFetching: true });
		fetch(`${proxyurl}${baseUrl}search/?lattlong=${latt},${long}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(json => {
				if (!json.length) {
					this.setState({
						noResultsMsg: "No results my dude",
						isFetching: false
					});
				} else {
					this.fetchLocationQuery(json[0].woeid);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	fetchLocationsOnSearch(query) {
		this.setState({ isFetching: true, weather: {} });
		fetch(`${proxyurl}${baseUrl}search/?query=${query}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(json => {
				if (!json.length) {
					this.setState({
						noResultsMsg: "No results my dude",
						isFetching: false
					});
				} else if (json.length === 1) {
					this.fetchLocationQuery(json[0].woeid);
				} else {
					console.log("json response", json);
					this.setState({
						searchResults: json,
						noResultsMsg: "",
						isFetching: false
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	fetchLocationQuery(woeid) {
		this.setState({ isFetching: true, searchResults: [] });
		fetch(`${proxyurl}${baseUrl}location/${woeid}/`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(json => {
				if (!Object.keys(json).length) {
					this.setState({
						noResultsMsg: "No results my dude",
						isFetching: false
					});
				} else {
					console.log("json response", json);
					this.setState({
						weather: json,
						noResultsMsg: "",
						isFetching: false
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Dinky little weather app</h1>
					<p>
						This app was created from scratch to learn about deploying with
						webpack without tools such as create-react-app
					</p>
				</Jumbotron>
				<FormGroup>
					<Label for="locationSearch">Get some weather data...</Label>
					<Input
						type="search"
						name="search"
						id="locationSearch"
						placeholder="enter a location..."
						onKeyUp={this.handleSearchKeyUp}
					/>
				</FormGroup>
				{this.state.noResultsMsg}
				{this.state.isFetching ? <Spinner /> : ""}
				<SearchResults
					searchResults={this.state.searchResults}
					onClickSearchResult={this.onClickSearchResult}
				/>
				<WeatherList weather={this.state.weather} />
			</div>
		);
	}
}

export default App;
