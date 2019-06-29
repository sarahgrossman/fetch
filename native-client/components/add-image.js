import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UploadImage } from './'
import styles from '../assets/stylesheet'


function AddImage (props) {
    const { eventId, eventName } = props
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50%',
    backgroundColor: '#f9f9ed'
  },
})

export default AddImage
