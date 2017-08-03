import React, {Component} from 'react';
//import Sorting from './Sorting';
import BugForm from './BugForm';
import Actions from './Actions';
import Client from '../../api/Client';

export default class BugsPage extends Component {
	
	constructor() {
		super();		
			
		this.state={ 
			bugs: [],
			filterBugs: []
			//actions: []
		}
	}
	
	componentDidMount(){
		Client.fetchBugs(bugs => {
			this.setState({
				bugs: bugs,
			});
		});
	}
	
	displayBugForm(){
		if(this.state.filterBugs != ''){
			return this.state.filterBugs.map((bug, index) => {
			return(
				<BugForm 	key={index}	
							id={bug.id}
							issueId={bug.issueId}
							dateCreated={bug.dateCreated}
							summary={bug.summary}
							description={bug.description}
							highPriority={bug.highPriority}
							severity={bug.severity}
							reporter={bug.reporter}
							assignedUser={bug.assignedUser}
							//action={ this.displayActions() }
							status={bug.status} />
			);
		});
		}else{	
		
		return this.state.bugs.map((bug, index) => {
			return(
				<BugForm 	key={index}	
							id={bug.id}
							issueId={bug.issueId}
							dateCreated={bug.dateCreated}
							summary={bug.summary}
							description={bug.description}
							highPriority={bug.highPriority}
							severity={bug.severity}
							reporter={bug.reporter}
							assignedUser={bug.assignedUser}
							//action={ this.displayActions() }
							status={bug.status} />
			);
		});
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
		if(this.state.filterBugs != ''){
			var array = this.state.filterBugs;
			array=this.sortArray(array, 'severity');
				this.setState({
					filterBugs: array
				});
		}else{
			var array = this.state.bugs;
			array=this.sortArray(array, 'severity');
			this.setState({
				bugs: array
			});
		}
	}
	
	sortId(){
		if(this.state.filterBugs != ''){
			var array = this.state.filterBugs;
			array=this.sortArray(array, 'id');
			this.setState({
				filterBugs: array
			});
		}else{
			var array = this.state.bugs;
			array=this.sortArray(array, 'id');
			this.setState({
				bugs: array
			});
		}	
	}
	
	sortIssueId(){
		if(this.state.filterBugs != ''){
			var array = this.state.filterBugs;
			array=this.sortArray(array, 'issueId');
			this.setState({
				filterBugs: array
			});
		}else{
			var array = this.state.bugs;
			array=this.sortArray(array, 'issueId');
			this.setState({
				bugs: array
			});
		}	
	}
	
	// sortDateSetup(arr, date){
		// return arr.sort(function(a, b){
			// a = new Date(a.date);
			// b = new Date(b.date);
			// return a>b ? -1 : a>b ? 1:0;
		// });
	// }
	
	// sortDate(){
		// var array = this.state.bugs;
		// array=this.sortDateSetup(array, 'dateCreated');
		// this.setState({
		// bugs: array
		// });
	// }

	// displayActions(){
		// return this.state.actions.map((action, index) => {	
			// return(
				// <Actions	key={index}
							// actionUser={this.state.actions[0]}
							// actionDateCreated={this.state.actions[1]}
							// actionAction={this.state.actions[2]} />
			// );
		// });
	// }
	
	// filter(){
		// if (this.refs.highP.checked){
			// var arr = this.state.bugs.filter(function(a){
				// return (a.highPriority == 'TRUE');
			// });
			// this.setState({
				// filterBugs: arr
			// });
		// }
		// if (this.refs.lowP.checked){
			// var arr = this.state.bugs.filter(function(a){
				// return (a.highPriority == 'FALSE');
			// });
			// this.setState({
				// filterBugs: arr
			// });
		// }
		// if (this.state.filterBugs != ''){
			// if (this.refs.highS.checked){
				// var arr = this.state.filterBugs.filter(function(a){
				// return (a.highPriority == 'HIGH');
				// });
				// this.setState({
					// filterBugs: arr
				// });
			// }if (this.refs.medS.checked){
				// var arr = this.state.filterBugs.filter(function(a){
				// return (a.highPriority == 'MEDIUM');
				// });
				// this.setState({
					// filterBugs: arr
				// });
			// }
		// }else{
			// if (this.refs.medS.checked){
				// var arr = this.state.bugs.filter(function(a){
				// return (a.highPriority == 'MEDIUM');
				// });
				// this.setState({
					// filterBugs: arr
				// });
		// }
			
			// if (this.refs.lowS.checked){
				// var arr = this.state.filterBugs.filter(function(a){
				// return (a.highPriority == 'LOW');
				// });
				// this.setState({
					// filterBugs: arr
				// });
			// }
		// }
	// }
	
	filterHighPriority(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.highPriority == 'TRUE');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.highPriority == 'TRUE');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterLowPriority(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.highPriority == 'FALSE');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.highPriority == 'FALSE');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterHighSeverity(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.severity == 'HIGH');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.severity == 'HIGH');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterMediumSeverity(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.severity == 'MEDIUM');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.severity == 'MEDIUM');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterLowSeverity(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.severity == 'LOW');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.severity == 'LOW');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterToDo(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.status == 'TO DO');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.status == 'TO DO');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterInProgress(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.status == 'IN PROGRESS');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.status == 'IN PROGRESS');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterInReview(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.status == 'IN REVIEW');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.status == 'IN REVIEW');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterInTest(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.status == 'IN TEST');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.status == 'IN TEST');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterInDemo(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.status == 'IN DEMO');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.status == 'IN DEMO');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	filterDone(){
		if (this.state.filterBugs != ''){
			var arr = this.state.filterBugs.filter(function (a){
				return (a.status == 'DONE');
			});
			this.setState({
				filterBugs: arr
			});
		}else{
			var arr = this.state.bugs.filter(function(a){
				return (a.status == 'DONE');
			});
			this.setState({
				filterBugs: arr
			});
		}
	}
	
	reset(){
		this.sortId();
		this.setState({
			filterBugs: []
		});
	}
	
	render(){	
		return(
			<div className="mdl-grid">
				<div>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.sortSeverity.bind(this)}>sort by severity</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.sortId.bind(this)}>sort by ID</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.sortIssueId.bind(this)}>sort by Issue ID</button>
				</div>
				
				<div className="mdl-grid">
					<div className="mdl-cell mdl-cell--2-col-2">
						<h5>Filter Options</h5><br/>
						<h6>Priority</h6><br/>
						<input className="mdl-radio__button" type = "radio" name="priority" ref="highP"onClick={this.filterHighPriority.bind(this)}/>High<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="priority" ref="lowP" onClick={this.filterLowPriority.bind(this)}/>Low<br/><br/>
						<h6>Severity</h6><br/>
						<input className="mdl-radio__button" type = "radio" name="severity" ref="highS" onClick={this.filterHighSeverity.bind(this)}/>High<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="severity" ref="medS" onClick={this.filterMediumSeverity.bind(this)}/>Medium<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="severity" ref="lowS" onClick={this.filterLowSeverity.bind(this)}/>Low<br/><br/>
						<h6>Status</h6><br/>
						<input className="mdl-radio__button" type = "radio" name="status" onClick={this.filterToDo.bind(this)}/>To Do<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="status" onClick={this.filterInProgress.bind(this)}/>In Progress<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="status" onClick={this.filterInReview.bind(this)}/>In Review<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="status" onClick={this.filterInTest.bind(this)}/>In Test<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="status" onClick={this.filterInDemo.bind(this)}/>In Demo<br/><br/>
						<input className="mdl-radio__button" type = "radio" name="status" onClick={this.filterDone.bind(this)}/>Done<br/><br/>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.reset.bind(this)}>reset</button>
					</div>
					
					<div className="mdl-cell mdl-cell--10-col">
						{this.displayBugForm()}
					</div>
				</div>
				
			</div>
		);
	}
}