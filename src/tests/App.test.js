import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders a snapshot', () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('handles loading clicks', () => {
	const component = renderer.create(
		<App />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	tree.props.handleLoadingClick();
	expect(tree).toMatchSnapshot();
});
