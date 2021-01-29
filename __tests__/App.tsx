import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App.tsx';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('has 1 child', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree.children).toHaveLength(1);
});
