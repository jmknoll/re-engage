import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

import { AsyncStorage } from 'react-native';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#831d19',
  navigationBarColor: '#339999',
  navBarBackgroundColor: '#339999',
  navBarTextColor: '#ffffff',
  navBarButtonColor: '#ffffff',
  statusBarTextColorScheme: 'light',
  navBarHidden: false,
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'red'
};

const landingNavigatorStyle = {
  navBarHidden: true,
  statusBarColor: '#831d19',
}

async function getCache (item) {
  try {
    const data = await AsyncStorage.getItem(item);
    if (data !== null){
      return data
    }
  } catch (error) {
  console.log(`error retrieving ${item} from AsyncStorage`)
  }
}

Navigation.startSingleScreenApp({
  screen: {
    screen: 'reEngage.LandingScreen',
    backButtonHidden: true,
    navigatorStyle: landingNavigatorStyle
  }
})
