import React, { Component } from "react";
import { Jumbotron, Container, FormGroup, Label, Input } from "reactstrap";
import fetch from "isomorphic-fetch";
import SearchResults from "./SearchResults";
const baseUrl = "https://www.metaweather.com/api/location/";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
	constructor() {
		super();
		this.state = { weather: {}, searchResults: [], noResultsMsg: "" };
		this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
	}

	handleSearchKeyUp(e) {
		if (e.key === "Enter") {
			console.log(e.target.value);
			this.fetchLocationsOnSearch(e.target.value);
		}
	}

	onClickSearchResult(e, woeid) {
		console.log(woeid);
	}

	// componentDidMount() {
	// 	this.fetchLocationOnLoad();
	// }
	//
	// fetchLocationOnLoad() {
	// 	var options = {
	// 		enableHighAccuracy: true,
	// 		timeout: 5000,
	// 		maximumAge: 0
	// 	};
	//
	// 	function success(pos) {
	// 		var crd = pos.coords;
	//
	// 		console.log("Your current position is:");
	// 		console.log(`Latitude : ${crd.latitude}`);
	// 		console.log(`Longitude: ${crd.longitude}`);
	// 		console.log(`More or less ${crd.accuracy} meters.`);
	// 	}
	//
	// 	function error(err) {
	// 		console.warn(`ERROR(${err.code}): ${err.message}`);
	// 	}
	//
	// 	navigator.geolocation.getCurrentPosition(success, error, options);
	// }

	fetchLocationsOnSearch(query) {
		fetch(`${proxyurl}${baseUrl}search/?query=${query}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(json => {
				if (!json.length) {
					this.setState({ noResultsMsg: "No results my dude" });
				} else {
					console.log("json response", json);
					this.setState({ searchResults: json, noResultsMsg: "" });
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

  fetchLocation(woeid)

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
				<SearchResults
					searchResults={this.state.searchResults}
					onClickSearchResult={this.onClickSearchResult}
				/>
			</div>
		);
	}
}

export default App;