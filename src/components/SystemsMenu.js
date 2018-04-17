import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SystemsMenu = ({ systemNames, currentSystemId, handleLoadingClick }) => (
	<ul>
		{systemNames.map(sys => (
			sys.id === currentSystemId
				? <li className="selected" key={sys.id}>
						{sys.name}
					</li> 
				: <li key={sys.id}>
						<Link to={`/${sys.id}`} onClick={() => handleLoadingClick()}>{sys.name}</Link>
					</li>
		))}
	</ul>
);

SystemsMenu.propTypes = {
	systemNames: PropTypes.array.isRequired,
	currentSystemId: PropTypes.string.isRequired,
	handleLoadingClick: PropTypes.func.isRequired
};

export default SystemsMenu;
