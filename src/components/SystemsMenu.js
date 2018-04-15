import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SystemsMenu = ({systems, currentSystemId, handleUpdateSystem}) => (
	<ul>
		{Object.keys(systems).map(systemId => (
			systemId === currentSystemId
				? <li className="selected" key={systemId}>{systems[systemId].name}</li> 
				: <li key={systemId}><Link to={`/${systemId}`} onClick={() => handleUpdateSystem(systemId)}>{systems[systemId].name}</Link></li>
		))}
	</ul>
);

SystemsMenu.propTypes = {
	systems: PropTypes.array.isRequired,
	currentSystemId: PropTypes.string.isRequired,
	handleUpdateSystem: PropTypes.func.isRequired
};

export default SystemsMenu;
