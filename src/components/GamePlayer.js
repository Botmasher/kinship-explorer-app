import React, { Component } from 'react';
//import { setFullscreen } from '../utils';

class GamePlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			canvasListenerAdded: false
		};
	}

	// simulate scrolling over gameInstance (Unity captures all input)
	addCanvasScrollover = () => {
		this.setState({ canvasListenerAdded: true}, () => {
			document.getElementById('game-player').addEventListener('wheel', (e) => {
				e.preventDefault();
				window.scrollTo(0, window.scrollY + e.deltaY);
			});		
		});
	};

	componentDidMount() {
		!this.state.canvasListenerAdded && this.addCanvasScrollover();
	}

	render() {
		return (
			<div className="webgl-content">
				<div id="game-player"></div>
			</div>
		);
	}
};

export default GamePlayer;
