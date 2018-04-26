import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  LIGHT_BLUE
} from '../../shared/constants';

import Button from '../../shared/components/Button';

export default class Landing extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Re-Engage</Text>
        <Text style={styles.title}>Simplify the political engagement process in order to make your voice heard</Text>
        <View style={{width: '100%'}}>
          <Button>Get Started</Button>
          <Text style={styles.link}>Already have an account? Sign in.</Text>
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