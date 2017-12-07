import React from 'react';

class Keywords extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: {}
		};

		this.selectKeyword = this.selectKeyword.bind(this);
	}

	componentWillReceiveProps(props) {
		if( this.state.keywords.length == undefined || this.state.keywords.indexOf(props.keyword) < 0 ) {
			this.setState({
				keywords: [...this.state.keywords,props.keyword]
			});
		}
	}

	selectKeyword(event) {
		this.props.selectKeyword(event.target.getAttribute('data-value'));
	}

	render() {
		var keywords = null;
		const _this = this;
		if(this.state.keywords.length > 0) {
			keywords = this.state.keywords.map(function(keyword,i){
				return (
					<a href="#" key={i} className="keyword" onClick={_this.selectKeyword} data-value={keyword}>{keyword}</a>
				);
			});
		}
		return (
			<div href="#" className="box-body item-line">
				<div className="col-md-12 text-center">
					<strong>Keywords</strong>
				</div>
				<div className="col-md-12 text-center">
					{keywords}
				</div>
			</div>
		);
	}
}

export default Keywords;