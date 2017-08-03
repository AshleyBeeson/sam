import React, { Component } from 'react';


export default class Filter extends Component {
	
	render(){
		const { actionUser, actionDateCreated, actionAction } = this.props;
		return(
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--6-col">User: { actionUser }</div>
				<div className="mdl-cell mdl-cell--6-col">Date Created: { actionDateCreated }</div>
				<div className="mdl-cell mdl-cell--12-col">Action: { actionAction }</div>
			</div>
		)
	}
}