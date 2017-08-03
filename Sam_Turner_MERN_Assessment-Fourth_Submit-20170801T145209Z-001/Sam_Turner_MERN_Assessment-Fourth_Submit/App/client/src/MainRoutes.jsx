import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BugsPage from './pages/Bugs/Bugs';
import NewBug from './pages/NewBug/NewBug';
import NewAction from './pages/NewAction/NewAction';

export default class MainRoutes extends Component {

	
	render(props) {
		return (
		<div id="content">
		  <main>
			<Switch>
			  <Route exact path='/' component={() => <BugsPage onChange={this.handleChange}/>} />
			  <Route exact path='/newbug' component={() => <NewBug onChange={this.handleChange}/>} />
			  <Route exact path='/newaction' component={() => <NewAction onChange={this.handleChange}/>} />
			</Switch>
		  </main>
		</div>
		);
	}
}