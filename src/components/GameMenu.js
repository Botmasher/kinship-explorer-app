import React from 'react';
import { PropTypes } from 'prop-types';
import SystemsMenu from './SystemsMenu';
import SystemDescription from './SystemDescription';

const GameMenu = ({ systems, currentSystemId, currentLanguage, currentDescription, handleLoadingClick, isGameLoaded, unloadedClicks }) => {
	// message Unity gameInstance function
	window.gameInstance.SendMessage('Nodes Manager', 'LabelFamilyMembers', currentLanguage);
	return (
		<div id="game-menu">
			<div className="systems-list systems-list-anim">
				<SystemsMenu systems={systems} currentSystemId={currentSystemId} handleLoadingClick={handleLoadingClick} />
				{isGameLoaded
					?	<SystemDescription currentSystemId={currentSystemId} currentLanguage={currentLanguage} currentDescription={currentDescription} />
					: <div key={`unloaded-message-${unloadedClicks}`} className="menu-loading"><br/>Currently loading game instance.<br/></div>
				}
			</div>
		</div>
	);
};

GameMenu.propTypes = {
	systems: PropTypes.object.isRequired,
	currentSystemId: PropTypes.string.isRequired,
	currentLanguage: PropTypes.string.isRequired,
	currentDescription: PropTypes.string,
	handleLoadingClick: PropTypes.func.isRequired,
	isGameLoaded: PropTypes.bool.isRequired,
	unloadedClicks: PropTypes.number.isRequired
};

export default GameMenu;
