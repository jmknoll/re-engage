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

export default class Home extends Component {

  static navigatorStyles = {
    navBarNoBorder: false,
  };

  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../../assets/Profile.png'),
        id: 'profile'
      }
    ]
  };

  constructor(props) {
    super(props)

    this.state = {
      zipCode: ''
    }

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this._getPoliticians = this._getPoliticians.bind(this);
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') { 
      if (event.id == 'profile') {
        this.props.navigator.push({
          screen: 'reEngage.ProfileScreen',
          title: 'Profile',
          backButtonTitle: '',
          navBarNoBorder: false,
          navigatorStyles: {
            navBarBackgroundColor: 'white'
          }

        })
      }
    }
  }

  _getPoliticians() {
    this.props.getPoliticians(this.state.zipCode)
  }

  _renderPoliticians() {
    return
    return this.props.politicians.map((politician) => {
      return(
        <Text>politician</Text>
      ) 
    })
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
        {this._renderPoliticians()}
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