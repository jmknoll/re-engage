import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default function Notification(props) {

  if (props.message.constructor === Array) {
    message = props.message.map((msg) => {
      return
    })
  }
  else if (props.message.constructor === String) {
    message = props.message
  }

  return(
    <View style={[styles.container, styles[`${props.type}`]]}> 
      {props.message.constructor === Array ? 
        (  
          <View>
            {props.message.map((msg) => {
              return(
                <Text style={styles[`${props.type}Text`]}>{`\u2022 ${msg}`}</Text>
              )
            })}
          </View>
        ) : (<Text style={styles[`${props.type}Text`]}>{props.message}</Text>)
      }
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