import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SystemsMenu = ({ systems, currentSystemId, handleLoadingClick }) => (
	<ul>
		{Object.keys(systems).map(systemId => (
			systemId === currentSystemId
				? <li className="selected" key={systemId}>
						{systems[systemId].name}
					</li> 
				: <li key={systemId}>
						<Link to={`/${systemId}`} onClick={() => handleLoadingClick()}>{systems[systemId].name}</Link>
					</li>
		))}
	</ul>
);

SystemsMenu.propTypes = {
	systems: PropTypes.object.isRequired,
	currentSystemId: PropTypes.string.isRequired,
	handleLoadingClick: PropTypes.func.isRequired
};

export default SystemsMenu;
