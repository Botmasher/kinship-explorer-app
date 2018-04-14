import React from 'react';
import { PropTypes } from 'prop-types';

const Footer = ({ setFullscreen }) => (
	<div className="footer">
		<div>I <a href="https://github.com/Botmasher/kinship-explorer-app">created this app</a> April 2018 with data from <a href="https://github.com/Botmasher/kinship-explorer-app/blob/master/SOURCES.md">these sources</a>.</div>
		{/*
			<div className="fullscreen-empty" onClick={setFullscreen}>test fullscreen</div>
		*/}
	</div>
);

Footer.propTypes = {
	setFullscreen: PropTypes.func
};

export default Footer;
