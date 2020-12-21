import React from 'react';
import Header from '../../components/Header';
import ShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
