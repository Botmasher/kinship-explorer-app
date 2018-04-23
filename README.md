# Kinship Term Explorer

![alt text](https://raw.githubusercontent.com/Botmasher/kinship-explorer-app/master/kinship-explorer-screenshot.png "Kinship Term Explorer app screenshot")

This app explores kinship terminology around the world. It uses six traditional categories from anthropology: "Crow", "Omaha", "Iroquois", "Eskimo", "Sudanese" and "Hawaiian". These buckets are approachable for starters but bring up debates among kinship anthropologists (more on that below).

## Why does this exist?

This is a leadup app for a multimedia project I'm putting together that's focused on the way languages around the world talk about family trees. Cool topic, right? Well, as I slog through the research I'm starting to crave an easy way to view and navigate these various kinship systems. I want to keep their differences straight in my head, and so far the words and diagrams aren't cutting it.

This app helps me illustrate the way kinship terminology changes around the world. It does this based on some good old standards in kinship anthropology: our world's kinship systems.

## What it is. What it's not.

This app *does* mean to give illustrative glances at kinship systems. It *does not* mean to be a rigorous or opinionated look at the underlying kinship research.

## Getting started

Here's an easy way to get this app up and running locally:

1. check that you have `node` and `npm` installed
2. get a local copy of this repository (by cloning, donwloading, etc.)
3. install the local app and dependencies
	- navigate to project root
	- use `npm` or `yarn` to install the project: `npm install`
4. start the frontend server with `npm` or `yarn`: `npm start`

Now you're ready to play with the app and to tinker with project directory files. If you're interested in the family tree visualization, you can dig into [the embedded Unity game](https://github.com/Botmasher/kinship-term-explorer) behind the game instance inside this app.

## Thinking through the code

Unlike some of my other leadup projects with their minimal interfaces, this one called for a visual approach where info is geometrically positioned and selectable on screen. I decided to start developing an app using C# and Unity. You can find the source files for that game/visualization [inside its own repo](https://github.com/Botmasher/kinship-term-explorer). I created a build of that app (located in `./public/unity/`) and embedded the build in this React frontend for the UI.

This app wraps the Unity game build in a React frontend. The main page includes the Unity player and components for selecting kinship systems and example languages. The Unity build is compiled and saved under `/app/public/unity` and loaded at the head of the public `index.html`. React accesses the game session and messages its C# functions through `window.gameInstance` to pass data indicating the current language.

The `public/` directory contains the app public index. The React App component is inserted into this page. The script on this page also instantiates a Unity game instance attached to the window. The React app messages this app to interact with the Unity build and send it a chosen language.

The main React work is found within the `src/` directory. The index file simply renders the main App component. The CSS does quite a bit of styling and animation work for this small app. The `components/` folder breaks pieces of the UI into a stateful parent `App` component and stateless functional children.

The static `store/` holds a representation of the mapping between kinship systems and languages within each system, along with a text description of each system. This mapping is compared against the system passed through the route, which is then used to find a language to interact with the Unity build by messaging it with the selected language.

## Academic basis

The kinship concepts used here are built on the Morgan-Lowie-Murdock tradition of dividing the world's languages and cultures into several kinship systems. Each system is based on standout features, and an archetypal language or region, such as "Sudanese" (for Morgan, highly descriptive) or "Hawaiian" (for Morgan, highly classificatory). These systems are still used for basic breakdowns in research, though with caveats, like in Bennardo's "Space in kinship". In particular, the reasons for slicing up the systems get debated and rejected, such as Morgan's identification of "descriptive" vs "classificatory" systems. Read gives an overview of the drawbacks of this way of classifying kinship terminology in a 2013 paper "A New Approach to Forming a Typology of Kinship Terminology Systems", where the author proposes a more consistent approach.

I originally included "Dravidian" in the list of systems. So far the cross-cousin dynamics of the Dravidian system seem to require wider diagrams. I will discuss Dravidian in the final project, but let's go with the six system model for this leadup project.

## Contributing

Both this UI and the embedded visualization were built as a leadup to a multimedia project on kin terms, so they won't be under active development long after that one goes live. Still, if you test out the app and spot ways to fix or improve it, feel free to open an issue or a pull request. Please do document reproducible steps for any fixes or give relevant context for any upgrades. I'm happy you're checking this out!

## License

This application is licensed by GitHub user Botmasher (Joshua R) under the terms of the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html). The embedded game build alone `public/unity/production/` is licensed under the [LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/).

Data from specific languages are not necessarily covered by the same license. Read through the [SOURCES.md](https://github.com/Botmasher/kinship-explorer-app/blob/master/SOURCES.md) to track down their licensing and use terms.
