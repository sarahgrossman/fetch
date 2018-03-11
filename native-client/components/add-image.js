import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UploadImage } from './';
import styles from '../assets/stylesheet';


function AddImage (props) {
    console.log('the event in add image is ', props.eventId)
    const { eventId, eventName } = props;
    return (
      <View style={pageStyles.container}>
          <Text style={styles.text}>add your look:</Text>
          <View style={styles.uploadContainer}>
          <UploadImage eventId={eventId} eventName={eventName} />
          </View>
        </View>
    )
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 300
  },
});

export default AddImage;
