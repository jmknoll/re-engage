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
      navigatorStyle: {
        navBarBackgroundColor: BODY_BACKGROUND,
        navBarLeftButtonColor: LIGHT_BLUE,
        navBarNoBorder: true,
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
        <Button onPress={this._goToRegistration}>Create Account</Button>
        <Button onPress={this._continueWithoutRegistration}>Continue Without Account</Button>
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