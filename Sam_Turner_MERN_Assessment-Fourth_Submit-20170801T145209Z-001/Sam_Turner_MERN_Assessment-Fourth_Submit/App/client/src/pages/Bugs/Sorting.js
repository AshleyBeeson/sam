import React, { Component } from 'react';
import Bugs from './Bugs';

export default class Sorting extends Component {
	
	constructor(props) {
		super(props);	
	
	
		this.state = {
			bugs: this.props.bugs
		}
	}
	
	sortArray(array, data){
		return array.sort(function(a, b){
			var x = a[data];
			var y = b[data];
			return ((x<y) ? -1 : ((x>y) ? 1:0));;
		});
	}
	
	sortSeverity(){
		var array = this.state.bugs;
		array=this.sortArray(array, 'severity');
			this.setState({
				bugs: array
			});
	}
	
	render(){
		return(
			<div>
				<button onClick={this.sortSeverity.bind(this)}>sort by severity</button>
				<button onClick={this.sortSeverity.bind(this)}>sort by ID</button>
			</div>
			)
	}
}