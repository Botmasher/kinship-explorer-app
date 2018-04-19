import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageNotFound = ({ match }) => (
	<div>
		<p>
			I'm not familiar with
			{match && match.params && match.params.system
				? ` ${match.params.system.charAt(0).toUpperCase()}${match.params.system.slice(1)} kinship`
				: ` that kinship system`
			}
			, so I couldn't load it.
		</p>
		<p><Link to="/">There are several systems I do understand...</Link></p>
	</div>
);

PageNotFound.propTypes = {
	match: PropTypes.object
};

export default PageNotFound;
