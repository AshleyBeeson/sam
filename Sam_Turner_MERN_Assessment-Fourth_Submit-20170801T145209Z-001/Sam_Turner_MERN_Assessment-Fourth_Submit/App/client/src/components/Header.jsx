import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor(){
		super();

	}
	
	render() {
		return(
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<header className="mdl-layout__header mdl-layout__header--waterfall">
					<div className="mdl-layout__header-row">
						<span id="title" className="mdl-layout-title">Bug Tracking Tool</span>
						<div className="mdl-layout-spacer"></div>
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
							mdl-textfield--floating-label mdl-textfield--align-right">
							
						</div>
						<nav className="mdl-navigation">
							
							<div className="mdl-navigation__link">
								<Link to={{ pathname: "/" }}><span>Bugs</span></Link>	
							</div>
							
							<div className="mdl-navigation__link">
								<Link to={{ pathname: "/NewBug" }}><span>Report Bug</span></Link>
							</div>
						</nav>
					</div>
				</header>
			</div>
		);
	}
}