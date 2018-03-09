import React, { Component } from 'react';
import { Text, Button, Image, View, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

class UploadImage extends Component {
  state = {
    image: null
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.button}>
      {!image && <Button
        title="Choose image from library"
        onPress={this._pickImage}
      /> }
        {image &&
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            <Text>is this the image you want?</Text>
            <Button
              title='yes'
              // onPress={}
              />
            <Button
              title='no'
              // onPress={}
              />
          </View>}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default UploadImage;
