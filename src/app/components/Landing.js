import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Landing extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Landing Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})