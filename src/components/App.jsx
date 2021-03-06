import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Profile from './github/Profile.jsx'
import Search from './github/Search.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Arthur236',
			userData: [],
			userRepos: [],
			perPage: 10
		}
	}

	// Get user data from Github
	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data})
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null})
				alert(err);
			}.bind(this)
		});
	}

	// Get user repos from Github
	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data})
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null})
				alert(err);
			}.bind(this)
		});
	}

	handleFormSubmit(username){
		this.setState({username: username}, function(){
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

  	render() {
    	return (
	      <div>
	      	<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
	      	<Profile {...this.state} /> {/* Pass in all state values to Profile component */}
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
