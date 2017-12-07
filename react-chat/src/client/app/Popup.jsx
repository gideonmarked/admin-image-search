import React from 'react';

class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: props.url
		};
		this.removeImage = this.removeImage.bind(this);
	}

	componentWillReceiveProps(props) {
		console.log(props.url);
		this.setState({
			url: props.url
		});
	}

	removeImage(event) {
		this.props.removeImage();
	}

	render() {
		var rendered = null;
		if( this.state.url ) {
			rendered = (
				<div href="#" className="box-body item-line large-image">
					<a href="#" onClick={this.removeImage}>x</a>
					<img src={ this.state.url } />
				</div>
			);
		}

		return (
			<div>
				{ rendered }
			</div>
		);
	}
}

export default Popup;