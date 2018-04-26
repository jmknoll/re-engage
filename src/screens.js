import { Navigation } from 'react-native-navigation';

import LandingScreen from './app/containers/Landing';

export function registerScreens(store, provider) {
  Navigation.registerComponent('reEngage.LandingScreen', () => LandingScreen, store, provider);
}