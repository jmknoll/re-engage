import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  BODY_BACKGROUND,
  LIGHT_BLUE
} from '../../shared/constants';

import Button from '../../shared/components/Button';

import OnboardingSwiper from './OnboardingSwiper'

export default class Onboarding extends Component {

  constructor(props) {
    super(props)

    this._goToRegistration = this._goToRegistration.bind(this);
    this._continueWithoutRegistration = this._continueWithoutRegistration.bind(this);
  }

  _goToRegistration() {
    this.props.navigator.push({
      screen: 'reEngage.RegistrationScreen',
      backButtonTitle: '',
      title: 'Create Account',
      navigatorStyle: {
        navBarBackgroundColor: 'white',
        navBarLeftButtonColor: LIGHT_BLUE,
        navBarNoBorder: false
      }
    })
  }

  _continueWithoutRegistration() {
    this.props.navigator.push({
      screen: 'reEngage.HomeScreen',
      title: 'Your Politicians',
      backButtonHidden: true
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <OnboardingSwiper />
        <Button style={{backgroundColor: LIGHT_BLUE}} textStyle={{color: 'white'}} onPress={this._goToRegistration}>Create Account</Button>
        <Button style={{backgroundColor: LIGHT_BLUE}} textStyle={{color: 'white'}} onPress={this._continueWithoutRegistration}>Continue Without Account</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: BODY_BACKGROUND,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})