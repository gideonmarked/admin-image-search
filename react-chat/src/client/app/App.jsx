import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from './SearchApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	  var item = null;
      return (
        <SearchApp />
      );
  }

}

App.defaultProps = {
};

ReactDOM.render(<App/>, document.getElementById('root'));