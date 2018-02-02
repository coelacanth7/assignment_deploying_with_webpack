import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SearchResults = ({ searchResults, onClickSearchResult }) => {
	if (!searchResults.length) {
		return null;
	}

	const searchItems = searchResults.map((result, i) => (
		<ListGroupItem
			key={i}
			onClick={e => onClickSearchResult(e, result.woeid)}
			name={result.woeid}
			action
		>
			{result.title}
		</ListGroupItem>
	));

	return <ListGroup>{searchItems}</ListGroup>;
};

export default SearchResults;
