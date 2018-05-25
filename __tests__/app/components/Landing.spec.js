import 'react-native';
import React from 'react';
import Landing from '../../../src/app/components/Landing';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  return
  const tree = renderer.create(<Landing />).toJSON();
  expect(tree).toMatchSnapshot();
})