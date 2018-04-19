export const isGameLoaded = () => window.gameLoaded;

export const onGameLoaded = handler => {
	const interval = window.setInterval(() => {
		window.gameLoaded && window.clearInterval(interval);
		window.gameLoaded && handler();
	}, 1000);
};

export const setFullscreen = () => window.gameInstance.SetFullscreen(1);

export const setGameLabels = (language) => (
	window.gameInstance.SendMessage('Nodes Manager', 'LabelFamilyMembers', language)
);
