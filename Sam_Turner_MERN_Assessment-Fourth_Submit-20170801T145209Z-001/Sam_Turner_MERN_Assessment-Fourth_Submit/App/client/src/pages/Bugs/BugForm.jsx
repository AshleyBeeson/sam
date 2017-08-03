import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BugForm extends Component {
	
	render(){
		const { id, issueId, dateCreated, summary, description, highPriority, severity, reporter, assignedUser, action, status } = this.props;
		return(
			<div className="mdl-grid-outer">
				<div className="mdl-cell mdl-cell--6-col">
					<div className="mdl-grid">
						<div className="mdl-cell mdl-cell--3-col"><h6>ID: </h6>{ id }</div>
						<div className="mdl-cell mdl-cell--4-col"><h6>Issue ID: </h6>{ issueId }</div>
						<div className="mdl-cell mdl-cell--5-col"><h6>Date Created: </h6>{ dateCreated }</div>
						<div className="mdl-cell mdl-cell--3-col"><h6>High Priority?: </h6>{ highPriority }</div>
						<div className="mdl-cell mdl-cell--3-col"><h6>Severity: </h6>{ severity }</div>
						<div className="mdl-cell mdl-cell--3-col"><h6>Reporter: </h6>{ reporter }</div>
						<div className="mdl-cell mdl-cell--3-col"><h6>Assigned User: </h6>{ assignedUser }</div>
					</div>
				</div>
				<div className="mdl-cell mdl-cell--6-col">
					<div className="mdl-grid">
						<div className="mdl-cell mdl-cell--12-col"><h6>Summary: </h6>{ summary }</div>
					</div>
				</div> 	
				<div className="mdl-cell mdl-cell--12-col-2">
					<div className="mdl-grid"> 
						<div className="mdl-cell mdl-cell--9-col"><h6>Description: </h6>{ description }</div>
						<div className="mdl-cell mdl-cell--3-col"><h6>Status: </h6>{ status }</div>
					</div>
				</div>
				<div className="mdl-cell mdl-cell--6-col">
					{ action }
				</div>
				<div className="mdl-cell mdl-cell--12-col-2">
					<div className="mdl-grid">
						<div className="mdl-cell mdl-cell--6-col">
							<Link  to={{ pathname: "/NewAction" }}>Report Action</Link>
						</div>
						<div className="mdl-cell mdl-cell--6-col">
							<Link to={{ pathname: "/NewBug" }}>Edit Bug</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}