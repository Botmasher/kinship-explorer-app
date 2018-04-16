import React from 'react';
import { PropTypes } from 'prop-types';

const repoLink = 'https://github.com/Botmasher/kinship-explorer-app';
const sourcesLink = 'https://github.com/Botmasher/kinship-explorer-app/blob/master/SOURCES.md';

const Footer = ({ setFullscreen }) => (
	<div className="footer">
		I <a href={repoLink}>created this app</a> April 2018 
		with data from <a href={sourcesLink}>these sources</a>.
	</div>
);

Footer.propTypes = {
	setFullscreen: PropTypes.func
};

export default Footer;
