import React from 'react';
import {
  // StyleSheet,
  View,
  Image,
} from 'react-native';

const SingleImage = (props) => {
  const { uri } = props;
    return (
      <View style={{flex: 1}}>
      <Image source={{uri}} style={{height: 400, width: 400}} />
      </View>
    )
}

export default SingleImage;
