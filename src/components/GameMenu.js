import React from 'react';
import { PropTypes } from 'prop-types';
import SystemsMenu from './SystemsMenu';
import SystemDescription from './SystemDescription';

const GameMenu = ({ systems, currentSystemId, currentDescription, handleUpdateSystem, isGameLoaded, unloadedClicks }) => {
	const defaultSystem = 'global';
	const defaultLanguage = 'Primary';
	const system = currentSystemId;
	const currentLanguage = currentSystemId ? systems[currentSystemId].languages[0] : defaultLanguage;
	window.gameInstance.SendMessage('Nodes Manager', 'LabelFamilyMembers', currentLanguage);
	return (
		<div id="game-menu">
			<div className="systems-list systems-list-anim">
				<SystemsMenu systems={systems} currentSystemId={system} handleUpdateSystem={handleUpdateSystem} />
				{isGameLoaded
					?	<SystemDescription currentSystemId={system} currentLanguage={currentLanguage} currentDescription={currentDescription} />
					: <div key={`unloaded-message-${unloadedClicks}`} className="menu-loading"><br/>Currently loading game instance.<br/></div>
				}
			</div>
		</div>
	);
};

GameMenu.propTypes = {
	systems: PropTypes.array.isRequired,
	currentSystemId: PropTypes.string.isRequired,
	currentDescription: PropTypes.string,
	handleUpdateSystem: PropTypes.func.isRequired,
	isGameLoaded: PropTypes.bool.isRequired,
	unloadedClicks: PropTypes.number.isRequired
};

export default GameMenu;
