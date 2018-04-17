import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GameContainer from './GameContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			unloadedClicks: 0
		};
	}

	handleLoadingClick = () => {
		// check for routing during game load - used to update div keys
		!window.gameLoaded
			? this.setState(prevState => ({unloadedClicks: prevState.unloadedClicks+1}))
			: this.setState({isLoaded: true})
		;
	};

	componentDidMount() {
		// check that game has fully loaded (used for e.g. mounting menu description)
		if (!this.state.isLoaded) {
			const interval = window.setInterval(() => {
				window.gameLoaded && window.clearInterval(interval);
				window.gameLoaded && this.setState({isLoaded: true});
			}, 1000);
		}
	}

	render() {
		const { isLoaded, unloadedClicks } = this.state;
		return (
			<div className="App">
				<h1 className="app-title">
					<span className="letter-decoration">K</span>{'inship '}
					<span className="letter-decoration">T</span>{'erm '}
					<span className="letter-decoration">E</span>{'xplorer'}
				</h1>
				<Route path="/:system?" render={({ match }) => (
					<GameContainer
						handleLoadingClick={this.handleLoadingClick}
						systemId={match && match.params && match.params.system ? match.params.system : null}
						isGameLoaded={isLoaded}
						unloadedClicks={unloadedClicks}
					/>
				)} />
			</div>
		);
	}
}

export default App;
