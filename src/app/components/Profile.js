import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  BODY_BACKGROUND,
  LIGHT_BLUE
} from '../../shared/constants';

import Button from '../../shared/components/Button';

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this._signOut = this._signOut.bind(this);
  }

  _signOut() {
    this.props.signOut(this.props.navigator);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.user.email}</Text>
        <Button style={styles.button} textStyle={{color: 'white'}} onPress={this._goToEditProfile}>Edit Profile</Button>
        <Button style={styles.button} textStyle={{color: 'white'}} onPress={this._signOut}>Sign Out</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BODY_BACKGROUND,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: LIGHT_BLUE
  }
})