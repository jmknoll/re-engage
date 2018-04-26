import { YellowBox, AppRegistry } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

import ReEngage from './src/ReEngage';

AppRegistry.registerComponent('ReEngage', () => ReEngage);
