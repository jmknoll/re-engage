import React from 'react';
import { View } from 'react-native';

import {
  WHITE,
  MEDIUM_GREY
} from '../constants';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: WHITE,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: MEDIUM_GREY,
    shadowRadius: 1,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    borderRadius: 4,
  },
};

export default Card