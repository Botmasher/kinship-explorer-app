import React from 'react';
import { PropTypes } from 'prop-types';
import SystemsMenu from './SystemsMenu';
import SystemDescription from './SystemDescription';

const GameMenu = ({ systems, currentSystemId, currentLanguage, currentDescription, handleUpdateSystem, isGameLoaded, unloadedClicks, match }) => {
	window.gameInstance.SendMessage('Nodes Manager', 'LabelFamilyMembers', currentLanguage);
	return (
		<div id="game-menu">
			<div className="systems-list systems-list-anim">
				<SystemsMenu systems={systems} currentSystemId={currentSystemId} handleUpdateSystem={handleUpdateSystem} />
				{isGameLoaded
					?	<SystemDescription currentSystemId={currentSystemId} currentLanguage={currentLanguage} currentDescription={currentDescription} />
					: <div key={`unloaded-message-${unloadedClicks}`} className="menu-loading"><br/>Currently loading game instance.<br/></div>
				}
			</div>
		</div>
	);
};

GameMenu.propTypes = {
	systems: PropTypes.array.isRequired,
	currentSystemId: PropTypes.string.isRequired,
	currentLanguage: PropTypes.string.isRequired,
	currentDescription: PropTypes.string,
	handleUpdateSystem: PropTypes.func.isRequired,
	isGameLoaded: PropTypes.bool.isRequired,
	unloadedClicks: PropTypes.number.isRequired,
	match: PropTypes.object 	// optional URI prop from router
};

export default GameMenu;
