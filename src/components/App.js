import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GameContainer from './GameContainer';
import PageNotFound from './PageNotFound';
import { store } from '../store';
import { gameExists, isGameLoaded, onGameLoaded } from '../utils';

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
		isGameLoaded()
			? this.setState({isLoaded: true})
			: this.setState(prevState => ({unloadedClicks: prevState.unloadedClicks+1}))
		;
	};

	componentDidMount() {
		// check that game has fully loaded (used for e.g. mounting menu description)
		!this.state.isLoaded && onGameLoaded(() => this.setState({isLoaded: true}));
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
				{gameExists()
					?	<Switch>
							<Route exact path="/" render={() => (
								<GameContainer
									handleLoadingClick={this.handleLoadingClick}
									systemId={'global'}
									isGameLoaded={isLoaded}
									unloadedClicks={unloadedClicks}
								/>
							)} />
							<Route exact path="/:system?" render={({ match }) => (
								match && match.params && Object.keys(systems).includes(match.params.system)
								?	<GameContainer
										handleLoadingClick={this.handleLoadingClick}
										systemId={match && match.params && match.params.system ? match.params.system : null}
										isGameLoaded={isLoaded}
										unloadedClicks={unloadedClicks}
									/>
								: <PageNotFound match={match} />
							)} />
							<Route component={PageNotFound} />
						</Switch>
					: <div>
							<p>
								My game player isn't loading on your browser or device. Do you happen to have one that{' '}
								<a href="https://docs.unity3d.com/Manual/webgl-browsercompatibility.html">supports Unity running on WebGL</a>?
							</p>
						</div>
				}

			</div>
		);
	}
}

export default App;
