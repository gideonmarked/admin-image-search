import React from 'react';

class ImageItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: props.item
		};

		this.selectImage = this.selectImage.bind(this);
	}

	componentWillReceiveProps(props) {
		this.setState({
			item: props.item
		})
	}

	selectImage(event) {
		console.log(event.target);
		this.props.selectImage( event.target.getAttribute('data-value') );
	}

	render() {
		console.log('item',this.state.item.link);
		return (
			<div href="#" className="box-body item-line">
				<div className="col-md-3 text-center">{ this.state.item.image.contextLink }</div>
				<div className="col-md-3 text-center"></div>
				<div className="col-md-2 text-center"></div>
				<div className="col-md-4 text-center">
					<a href="#" onClick={ this.selectImage }>
						<img src={ this.state.item.image.thumbnailLink } data-value={ this.state.item.link } />
					</a>
				</div>
			</div>
		);
	}
}

export default ImageItem;