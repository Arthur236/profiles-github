import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Profile from './github/Profile.jsx'

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

	// Get user data from Github
	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log(data);
				this.setState({userData: data})
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null})
				alert(err);
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
	}

  	render() {
    	return (
	      <div>
	      	<Profile userData = {this.state.userData} />
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
