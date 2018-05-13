import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  BODY_BACKGROUND,
  LIGHT_BLUE
} from '../../shared/constants';

import Button from '../../shared/components/Button';

export default class Landing extends Component {

  constructor(props) {
    super(props)

    this._goToOnboarding = this._goToOnboarding.bind(this);
    this._goToSignIn = this._goToSignIn.bind(this);
  }

  _goToOnboarding() {
    this.props.navigator.push({
      screen: 'reEngage.OnboardingScreen',
      backButtonTitle: '',
      navigatorStyle: {
        navBarBackgroundColor: BODY_BACKGROUND,
        navBarLeftButtonColor: LIGHT_BLUE,
        navBarNoBorder: true,
      }
    })
  }

  _goToSignIn() {
    this.props.navigator.push({
      screen: 'reEngage.SignInScreen',
      backButtonTitle: '',
      title: 'Sign In',
      navigatorStyle: {
        navBarBackgroundColor: 'white',
        navBarLeftButtonColor: LIGHT_BLUE,
      }
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Re-Engage</Text>
        <Text style={styles.title}>Simplify the political engagement process in order to make your voice heard</Text>
        <View style={{width: '100%'}}>
          <Button onPress={this._goToOnboarding}>Get Started</Button>
          <TouchableOpacity onPress={this._goToSignIn}>
            <Text style={styles.link}>Already have an account? Sign in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: LIGHT_BLUE,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
})