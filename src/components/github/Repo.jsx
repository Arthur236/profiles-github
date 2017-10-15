import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Repo extends Component {

  	render() {
  		const {repo} = this.props;

    	return (
			<li className="list-group_item">
				<a href={repo.html_url}>{repo.name}</a> : {repo.description}
			</li>
	    );
	}
}

export default Repo;
