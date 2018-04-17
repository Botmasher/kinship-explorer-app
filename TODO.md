# Task List

## Components
- [X] create UI menu
	- [X] display primary terms by default (compounds)
	- [X] select a system (types)
	- [X] select an example (labels)
	- [X] display current system being viewed
	- [X] display current language being viewed
- [X] create start display
	- [X] show message when user selects a system while game loads
	- [X] guard against changing set system/language state while game loads
	- [X] once loaded, show kinship system selection
- [ ] switch description when game has loaded
	- [X] get the basic task up and running with interval checks for `gameLoaded`
	- [ ] find a better way than loop checks of `window.gameLoaded`
	- [ ] attach async work to the window and have React component follow up on it
	- [ ] see game `Assets/plugins/C~.jslib` for method call when game finishes loading
- [X] cite and link sources
	- [X] create sources documentation
	- [X] update link currently in footer
- [X] add router and routes/links for bookmarkable per-system visualizations 
- [ ] 404 routing
- [ ] allow scrolling when pointer over game instance
- [X] break out route params check into a `GameContainer`
	- [X] this container will handle picking current language and system using params and store
	- [X] this container will render subcomponents for the menu, desc, visualization, footer
	- [X] rename child presentaiton component `GameContainer` to `GamePlayer`
- [ ] split out `window.gameInstance` handlers and import into components like `GameMenu`
- [X] refactor how `GameContainer` passes systems to subcomponent (avoid whole datastore)

## Styles
- [ ] CSS breakpoints for smaller widths

## State
- [X] redo list and state to focus on each system rather than selecting languages
	- [X] just display one example language per system
	- [X] display system descriptions
	- [X] style and keyframe descriptions
- [ ] revisit how app stores state vs passes params after introduction of single-page routing
- [ ] reconsider how app is duplicating language name data to associate them with systems
	- [ ] should the backend store data associating languages with systems?

## Data
- [ ] review how all backend data packaged into game build and instantiated in game instance
- [ ] consider better ways of tying app to visualization data and list them here

## Testing
- [ ] set up tests

## Feedback
- [ ] choose a license for this project
- [X] make it clear to user the difference between system name (e.g. Sudanese) and language (e.g. Latin)
- [ ] (in game code) extend generations below ego, e.g. Dutch nephew/niece = cousin terms (https://www.patreon.com/posts/slapping-labels-17717106)
	- [ ] changes game logic and family tree builder
	- [ ] presentation asset needs for generating -1 and -2 ties / members
	- [ ] add data to every language in the JSON
	- [ ] figure out dynamic node placement to make generating trees like this flexible
