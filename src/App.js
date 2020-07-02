import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
	constructor() {
		super();
		console.log('App - constructor');
	}
	componentDidMount() {
		console.log('App - mounted');
	}
	state = {
		counters: [
			{ id:1, value: 4 },
			{ id:2, value: 0 },
			{ id:3, value: 0 },
			{ id:4, value: 0 }
		]
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};

	handleReset = (counterId) => {
		const counters = this.state.counters.map(c => { c.value = 0; return c; });
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({counters});
	};
	render() {
		console.log( 'App - rendered');
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					<Counters
					counters={this.state.counters}
					onReset={this.handleReset}
					onDelete={this.handleDelete}
					onIncrement={this.handleIncrement}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
