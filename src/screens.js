import { Navigation } from 'react-native-navigation';

import LandingScreen from './app/containers/Landing';
import OnboardingScreen from './app/containers/Onboarding';
import SignInScreen from './app/containers/SignIn';
import ForgotPasswordScreen from './app/containers/ForgotPassword';
import RegistrationScreen from './app/containers/Registration';
import HomeScreen from './app/containers/Home';

export function registerScreens(store, provider) {
  Navigation.registerComponent('reEngage.LandingScreen', () => LandingScreen, store, provider);
  Navigation.registerComponent('reEngage.OnboardingScreen', () => OnboardingScreen, store, provider);
  Navigation.registerComponent('reEngage.SignInScreen', () => SignInScreen, store, provider);
  Navigation.registerComponent('reEngage.ForgotPasswordScreen', () => ForgotPasswordScreen, store, provider);
  Navigation.registerComponent('reEngage.RegistrationScreen', () => RegistrationScreen, store, provider);
  Navigation.registerComponent('reEngage.HomeScreen', () => HomeScreen, store, provider);

}