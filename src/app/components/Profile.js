import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Filler profile page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1
  }
})