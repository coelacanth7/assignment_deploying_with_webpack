const url = "https://www.metaweather.com/api/location/44418/";

const location = {
	consolidated_weather: [
		{
			id: 6100360309506048,
			weather_state_name: "Showers",
			weather_state_abbr: "s",
			wind_direction_compass: "WNW",
			created: "2018-02-01T20:31:01.804740Z",
			applicable_date: "2018-02-01",
			min_temp: 2.8619999999999997,
			max_temp: 6.7999999999999998,
			the_temp: 6.2800000000000002,
			wind_speed: 11.122222230777062,
			wind_direction: 302.62185387209274,
			air_pressure: 1006.1700000000001,
			humidity: 68,
			visibility: 10.508629603117793,
			predictability: 73
		},
		{
			id: 4992563689816064,
			weather_state_name: "Heavy Cloud",
			weather_state_abbr: "hc",
			wind_direction_compass: "NNW",
			created: "2018-02-01T20:31:01.946470Z",
			applicable_date: "2018-02-02",
			min_temp: 2.5059999999999998,
			max_temp: 7.2199999999999989,
			the_temp: 6.375,
			wind_speed: 10.438413061442775,
			wind_direction: 333.20460345441006,
			air_pressure: 1011.355,
			humidity: 70,
			visibility: 10.993609818659031,
			predictability: 71
		},
		{
			id: 6022525569990656,
			weather_state_name: "Heavy Cloud",
			weather_state_abbr: "hc",
			wind_direction_compass: "WNW",
			created: "2018-02-01T20:31:02.427850Z",
			applicable_date: "2018-02-03",
			min_temp: 1.3860000000000001,
			max_temp: 5.2379999999999995,
			the_temp: 4.3300000000000001,
			wind_speed: 3.9770207996675415,
			wind_direction: 301.0707158880893,
			air_pressure: 1010.1600000000001,
			humidity: 83,
			visibility: 7.639758808558021,
			predictability: 71
		},
		{
			id: 4556739131211776,
			weather_state_name: "Light Cloud",
			weather_state_abbr: "lc",
			wind_direction_compass: "NNE",
			created: "2018-02-01T20:31:02.809080Z",
			applicable_date: "2018-02-04",
			min_temp: 0.3600000000000001,
			max_temp: 5.8519999999999994,
			the_temp: 4.5800000000000001,
			wind_speed: 9.7031303877085815,
			wind_direction: 26.200243697324662,
			air_pressure: 1027.4749999999999,
			humidity: 69,
			visibility: 14.112582518094328,
			predictability: 70
		},
		{
			id: 6600012913967104,
			weather_state_name: "Heavy Cloud",
			weather_state_abbr: "hc",
			wind_direction_compass: "NNE",
			created: "2018-02-01T20:31:02.738320Z",
			applicable_date: "2018-02-05",
			min_temp: -0.85999999999999999,
			max_temp: 5.4659999999999993,
			the_temp: 5.2799999999999994,
			wind_speed: 6.2758770297415101,
			wind_direction: 32.131021121588098,
			air_pressure: 1027.5549999999998,
			humidity: 64,
			visibility: 13.132990833532173,
			predictability: 71
		},
		{
			id: 6458625006501888,
			weather_state_name: "Showers",
			weather_state_abbr: "s",
			wind_direction_compass: "NW",
			created: "2018-02-01T20:31:05.308820Z",
			applicable_date: "2018-02-06",
			min_temp: 0.8600000000000001,
			max_temp: 4.7780000000000005,
			the_temp: 7.4299999999999997,
			wind_speed: 5.5813804382406742,
			wind_direction: 308.72517120901841,
			air_pressure: 1035.24,
			humidity: 67,
			visibility: 9.9978624830987037,
			predictability: 73
		}
	],
	time: "2018-02-01T22:32:35.459560Z",
	sun_rise: "2018-02-01T07:38:57.163866Z",
	sun_set: "2018-02-01T16:49:51.466884Z",
	timezone_name: "LMT",
	parent: {
		title: "England",
		location_type: "Region / State / Province",
		woeid: 24554868,
		latt_long: "52.883560,-1.974060"
	},
	sources: [
		{
			title: "BBC",
			slug: "bbc",
			url: "http://www.bbc.co.uk/weather/",
			crawl_rate: 180
		},
		{
			title: "Forecast.io",
			slug: "forecast-io",
			url: "http://forecast.io/",
			crawl_rate: 480
		},
		{
			title: "HAMweather",
			slug: "hamweather",
			url: "http://www.hamweather.com/",
			crawl_rate: 360
		},
		{
			title: "Met Office",
			slug: "met-office",
			url: "http://www.metoffice.gov.uk/",
			crawl_rate: 180
		},
		{
			title: "OpenWeatherMap",
			slug: "openweathermap",
			url: "http://openweathermap.org/",
			crawl_rate: 360
		},
		{
			title: "Weather Underground",
			slug: "wunderground",
			url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
			crawl_rate: 720
		},
		{
			title: "World Weather Online",
			slug: "world-weather-online",
			url: "http://www.worldweatheronline.com/",
			crawl_rate: 360
		},
		{
			title: "Yahoo",
			slug: "yahoo",
			url: "http://weather.yahoo.com/",
			crawl_rate: 180
		}
	],
	title: "London",
	location_type: "City",
	woeid: 44418,
	latt_long: "51.506321,-0.12714",
	timezone: "Europe/London"
};
