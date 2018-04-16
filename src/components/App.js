import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GameMenu from './GameMenu';
import GameContainer from './GameContainer';
import { store } from '../store';

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

	setFullscreen = () => window.gameInstance.SetFullscreen(1);

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
		const { systems } = store;
		return (
			<div className="App">
				<h1 className="app-title">
					<span className="letter-decoration">K</span>{'inship '}
					<span className="letter-decoration">T</span>{'erm '}
					<span className="letter-decoration">E</span>{'xplorer'}
				</h1>
				<Route path="/:system?" render={({ match }) => (
					<GameMenu
						handleLoadingClick={this.handleLoadingClick}
						systems={systems}
						currentSystemId={match.params && match.params.system ? match.params.system : 'global'}
						currentLanguage={match.params && match.params.system ? systems[match.params.system].languages[0] : 'Primary'}
						currentDescription={match.params && match.params.system ? systems[match.params.system].description : systems['global'].description}
						isGameLoaded={isLoaded}
						unloadedClicks={unloadedClicks}
					/>
				)} />
				<GameContainer
					title={"Kinship Term Explorer"}
					setFullscreen={this.setFullscreen}
				/>
			</div>
		);
	}
}

export default App;
