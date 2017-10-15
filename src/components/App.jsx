import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Arthur236',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

  	render() {
    	return (
	      <div>
	      	{this.state.username}
	      </div>
	    );
	}
}

App.propTypes = {
	clientId: PropTypes.string,
	clientSecret: PropTypes.string
};

App.defaultProps = {
	clientId: '9aa2b856f954814b7fd7',
	clientSecret: 'da29be686c554c8b5f6824b53cf042294d6046b5'
};

export default App;
