import React, { Component } from 'react';
import Header from './components/Header';
import MainRoutes from './MainRoutes';

export default class App extends Component {
	
		
	render() {
		return(
			<div>
				<Header />
				<MainRoutes />
			</div>
		);
	}
}