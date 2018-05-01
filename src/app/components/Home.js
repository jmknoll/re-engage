import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import {
  BODY_BACKGROUND,
  LIGHT_BLUE,
  DARK_GREY
} from '../../shared/constants';

import Button from '../../shared/components/Button';

export default class Onboarding extends Component {

  constructor(props) {
    super(props)

    this.state = {
      zipCode: ''
    }

    this._getPoliticians = this._getPoliticians.bind(this);
  }

  _getPoliticians() {
    this.props.getPoliticians(this.state.zipCode)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Please input your zip code to get information on your politicians.</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={ (zipCode) => this.setState({zipCode}) }
        />
        <Button onPress={this._getPoliticians}>Get Politicians</Button>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: DARK_GREY,
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
})