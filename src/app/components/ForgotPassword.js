import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import {
  LIGHT_BLUE,
  BODY_BACKGROUND,
  WHITE,
  DARK_GREY,
  LIGHT_GREY,
  MEDIUM_GREY
} from '../../shared/constants';

import Button from '../../shared/components/Button';
import Notification from '../../shared/components/Notification';
import Card from '../../shared/components/Card';

export default class ForgotPassword extends Component {

  static navigatorButtons = {
    leftButtons: [
      {
        icon: require('../../assets/CloseX.png'),
        id: 'close'
      }
    ],
  };

  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.resetPassword = this.resetPassword.bind(this);
    this.failureCallback = this.failureCallback.bind(this);
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') { 
      if (event.id == 'close') {
        this.props.resetMessageState();
        this.props.navigator.dismissModal({
          animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
      }
    }
  }

  resetPassword() {
    
    let email = {
      email: this.state.email
    }

    this.props.resetPassword(
      email, 
      this.failureCallback
    )
  }


  failureCallback(msg) {
    Alert.alert(msg)
  }


  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
        <Text style={{textAlign: 'center'}}>Please enter your email to reset your password</Text>
        <Card>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            onChangeText={ (email) => this.setState({email}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          {this.props.resetPasswordFailure ? 
            (
              <Alert type='error' message={this.props.errorMessage}></Alert>
            )
           : null}
          {this.props.resetPasswordSuccess ? 
            (
              <Alert type='success' message={'We have sent you an email containing instructions to reset your password'}></Alert>
            )
           : null }
        </Card>
        <Button style={{backgroundColor: LIGHT_BLUE, marginTop: 'auto'}} textStyle={{color: 'white'}} onPress={this.resetPassword}>Reset Password</Button>
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
  }
})