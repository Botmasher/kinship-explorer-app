import React from 'react';
import { PropTypes } from 'prop-types';
import GameMenu from './GameMenu';
import GamePlayer from './GamePlayer';
import Footer from './Footer';
import { store } from '../store';

const setFullscreen = () => window.gameInstance.SetFullscreen(1);

const GameContainer = ({ systemId, handleLoadingClick, isGameLoaded, unloadedClicks }) => {
	const defaultSystem = 'global';
	const { systems } = store;
	// select data based on app route params
	const currentSystemId = systemId ? systemId : defaultSystem;
	const currentLanguage = systems[currentSystemId].languages[0];
	const currentDescription = systems[currentSystemId].description;
	return (
		<div id="game-container">
			<GameMenu
				systemNames={Object.keys(systems).reduce((systemNames, system) => (
					[ ...systemNames, { id: system, name: systems[system].name } ]
				), [])}
				currentSystemId={currentSystemId}
				currentLanguage={currentLanguage}
				currentDescription={currentDescription}
				handleLoadingClick={handleLoadingClick}
				isGameLoaded={isGameLoaded}
				unloadedClicks={unloadedClicks}
			/>
			<GamePlayer />
			<Footer setFullscreen={setFullscreen} />
		</div>
	);
};

GameMenu.propTypes = {
	systemId: PropTypes.string,
	handleLoadingClick: PropTypes.func.isRequired,
	isGameLoaded: PropTypes.bool.isRequired,
	unloadedClicks: PropTypes.number.isRequired
};

export default GameContainer;
