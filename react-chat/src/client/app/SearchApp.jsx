import React from 'react';
import SearchBar from './SearchBar.jsx';
import ImageItems from './ImageItems.jsx';
import Keywords from './Keywords.jsx';
import Popup from './Popup.jsx';

class SearchApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: null,
			keyword: null,
			url: null
		};

		this.updateSearchHandler = this.updateSearchHandler.bind(this);
		this.selectKeyword = this.selectKeyword.bind(this);
		this.selectImage = this.selectImage.bind(this);
		this.removeImage = this.removeImage.bind(this);
	}

	updateSearchHandler(value) {
		fetch('https://www.googleapis.com/customsearch/v1/?cx=016120377428848150027%3Akeufvgjzqg8&key=AIzaSyBqFMI9E7DuTRbTXzl0Uj4fyqLWBPlMl0g&searchType=image&q=' + value)
	      .then( results => {
	        return results.json();
	      })
	      .then( data => {
	      	data.items.keyword = value;

	      	this.setState({
	      		items: data.items,
	      		keyword: value
	      	});
	      });
	}

	selectKeyword(value){
		this.setState({
      		keyword: value
      	});
	}

	selectImage( url ) {
		console.log('url',url);
		this.setState({
			url: url
		});
	}

	removeImage() {
		this.setState({
			url: null
		});
	}

	render() {
		return (
			<div id="search-app">
				<SearchBar updateSearchHandler={this.updateSearchHandler} />
				<Keywords keyword={ this.state.keyword } selectKeyword={this.selectKeyword} />
				<Popup url={this.state.url} removeImage={ this.removeImage } />
				<ImageItems keyword={ this.state.keyword } items={this.state.items} selectImage={this.selectImage} />
			</div>
		);
	}
}

export default SearchApp;