import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			textvalue: null
		};
		this.updateTextHandler = this.updateTextHandler.bind(this);
		this.submitSearch = this.submitSearch.bind(this);
	}

	updateTextHandler(event)  {
		this.setState({
			textvalue: event.target.value
		});
	}

	submitSearch() {
		this.props.updateSearchHandler(this.state.textvalue);
	}

	render() {
		return (
			<div className="box-body">
				<div className="input-group input-group-sm">
					<span className="input-group-addon">
						<i className="fa fa-search"></i>
					</span>
					<input type="text" className="form-control" placeholder="Search Image" onChange={ this.updateTextHandler } />
					<span className="input-group-btn">
                      <button type="button" className="btn btn-info btn-flat" onClick={this.submitSearch}>Search</button>
                    </span>
				</div>
			</div>
		);
	}
}

export default SearchBar;