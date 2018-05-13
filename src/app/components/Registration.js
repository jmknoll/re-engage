import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import {
  BODY_BACKGROUND,
  LIGHT_BLUE,
  LIGHT_GREY,
  DARK_GREY
} from '../../shared/constants';

import Button from '../../shared/components/Button';
import Card from '../../shared/components/Card';

export default class Onboarding extends Component {

  constructor(props) {
    super(props)

    this._registerAccount = this._registerAccount.bind(this);
  }

  _registerAccount() {
    this.props.navigator.push({
      screen: 'reEngage.HomeScreen',
      title: 'Your Politicians',
      backButtonHidden: true,
    })
  }

  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
        <Card> 
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            onChangeText={ (email) => this.setState({email}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Password</Text>
          <TextInput 
            type='password'
            style={styles.input}
            onChangeText={ (password) => this.setState({password}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput 
            type='password'
            style={styles.input}
            onChangeText={ (passwordConfirm) => this.setState({passwordConfirm}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Location</Text>
          <TextInput 
            type='text'
            style={styles.input}
            onChangeText={ (location) => this.setState({location}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
        </Card>
        <Button style={{backgroundColor: LIGHT_BLUE, marginTop: 'auto'}} textStyle={{color: 'white'}} onPress={this._registerAccount}>Register</Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: BODY_BACKGROUND,
    paddingBottom: 40
  },
  label: {
    color: LIGHT_GREY,
    marginTop: 10,
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    borderRadius: 4,
    color: DARK_GREY,
    paddingLeft: 10,
    marginBottom: 15
  },
})