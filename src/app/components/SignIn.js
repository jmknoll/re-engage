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

    this._signIn = this._signIn.bind(this);
  }

  _signIn() {
    this.props.navigator.push({
      screen: 'reEngage.HomeScreen',
      title: 'Your Politicians',
      backButtonHidden: true
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Button onPress={this._signIn}>Sign In</Button>
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