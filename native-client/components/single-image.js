import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'

const SingleImage = (props) => {
  const { uri } = props
    return (
      <View style={pageStyles.container}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={375}
          imageHeight={300}>
        <Image source={{uri}} style={{width: 375, height: 300}} />
        </ImageZoom>
      </View>
    )
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9ed',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default SingleImage
