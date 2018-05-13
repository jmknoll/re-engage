import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default function Alert(props) {
  return(
    <View style={[styles.container, styles[`${props.type}`]]}> 
      <Text style={styles[`${props.type}Text`]}>{props.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
  },
  error: {
    backgroundColor: '#f2dede',
    borderColor: '#ebcccc',
  },
  errorText: {
    color: '#a94442',
  },
  success: {
    backgroundColor: '#dff0d8',
    borderColor: '#d0e9c6'
  },
  successText: {
    color: '#3c763d',
  }
})