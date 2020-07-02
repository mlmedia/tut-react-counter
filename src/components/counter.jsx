import React, { Component } from "react";

class Counter extends Component {

	componentDidUpdate(prevProps, prevStatte) {
		console.log('prevProps', prevProps);
		console.log('prevState', prevProps);
	}

	componentWillUnmount() {
		console.log('Counter - unmount');
	}
	state = {
		//value: this.props.counter.value,
		tags: ['tag1','tag2','tag3']
	};

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// 	console.log('Constructor', this);
	// }

	renderTags() {
		if (this.state.tags.length === 0) {
			return <p>There are no tags!</p>;
		}
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
			</div>
		);
	}

	// handleIncrement = () => {
	// 	this.setState({ value: this.state.value + 1 });
	// }

	render() {
		console.log('Counter - rendered');
		return (
			<div>
				{this.state.tags.length === 0 && 'Please create a new tag!'}
				{this.renderTags()}
			</div>
		)
	}
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0 ? 'warning' : 'primary');
		return classes;
	}
	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;
