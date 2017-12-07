import React from 'react';

import ImageItem from './ImageItem.jsx';

class ImageItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: null,
			current: null
		};
		this.selectImage = this.selectImage.bind(this);
	}

	componentWillReceiveProps(props) {
		if( !this.state.items && props.items ) {
			this.setState({
				items: [props.items]
			});
		}
		else if( this.state.items && this.state.items.indexOf(props.items) < 0 ) {
			this.setState({
				items: [...this.state.items,props.items]
			});
		}

		if( props.keyword ) {
			this.setState({
				current: props.keyword
			});
		}
	}

	selectImage( url ) {
		this.props.selectImage( url );
	}

	render() {
		var items = null;
		var _this = this;
		if( this.state.items && this.state.current ) {
			items = this.state.items.filter(function(item,i) {
				return item.keyword == _this.state.current;
			}); 

			items = items[0].map(function(item,i) {
				let key = _this.state.current + i;
				return (
					<ImageItem key={key} item={item} selectImage={ _this.selectImage } />
				);
			});
		}

		return (
			<div>
				<div className="box-body item-line">
					<div className="col-md-3 text-center"><strong>URL</strong></div>
					<div className="col-md-3 text-center"><strong>Contact Details</strong></div>
					<div className="col-md-2 text-center"><strong>Time Stamp</strong></div>
					<div className="col-md-4 text-center"><strong>Image Thumbnail</strong></div>
				</div>
				{ items }
			</div>
		);
	}
}

export default ImageItems;