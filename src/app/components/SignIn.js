import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import {
  LIGHT_BLUE,
  BODY_BACKGROUND,
  DARK_GREY,
  LIGHT_GREY,
} from '../../shared/constants';

import Button from '../../shared/components/Button';
import Card from '../../shared/components/Card';
import Notification from '../../shared/components/Notification';

export default class SignIn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this._signIn = this._signIn.bind(this);
    this._showForgotPasswordScreen = this._showForgotPasswordScreen.bind(this);
  }

  _signIn() {
    
    let user = {
      email: this.state.email,
      password: this.state.password,
      logged_in: true
    }

    this.props.signIn(
      user, 
      this.props.navigator
    )
  }

  _showForgotPasswordScreen() {
    this.props.navigator.showModal({
      screen: 'reEngage.ForgotPasswordScreen',
      title : 'Reset Password',
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
            style={styles.input}
            onChangeText={ (password) => this.setState({password}) }
            autoCorrect={false}
            secureTextEntry={true}
          />
        {this.props.errorMessage ?  <Notification type='error' message={this.props.errorMessage} /> : null}
        </Card>
        <TouchableOpacity onPress={this._showForgotPasswordScreen}>
          <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
        <Button style={{marginTop: 'auto', backgroundColor: LIGHT_BLUE}} textStyle={{color: 'white'}} onPress={this._signIn}>Sign In</Button>
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
  link: {
    color: DARK_GREY,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
})