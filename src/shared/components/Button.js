import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
 BODY_BACKGROUND,
 DARK_GREY,
 DARK_BLUE 
} from '../constants';

export default function Button(props) {
  return(
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <View>
        <Text style={[styles.textStyle, props.textStyle]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

/*
Button.propTypes = {
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func.isRequired,
}
*/

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BODY_BACKGROUND,
    borderRadius: 4,
    height: 60,
    marginTop: 6,
    marginBottom: 6,
    width: '100%'
  },
  textStyle: {
    textAlign: 'center',
    color: DARK_GREY,
    fontSize: 18,
    fontWeight: 'bold',
  },
})