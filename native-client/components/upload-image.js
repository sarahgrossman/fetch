import React, { Component } from 'react';
import { Text, Button, Image, View, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
// import API_ROOT from '../ip-addresses';

let API_ROOT = 'http://localhost:5000';

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

  onPressYes() {
    // axios.post(`${API_ROOT}/images`, {image: this.state.image)})
    // .then(res => res.data)
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
    const data = new FormData();
    data.append('name', 'Sarah');
    data.append('photo', {
      uri: this.state.image,
      type: 'image/jpeg',
      name: 'testPhoto'
    });
    fetch(`${API_ROOT}/images/`, {
      method: 'post',
      body: data
    })
    .then(res => {
      console.log(res)
    });
  }

  render() {
    let { image } = this.state;
    console.log('$$$$$THE IMAGE IS ', image);

    return (
      <View style={styles.button}>
      {!image && <View><Button
        title="Choose image from library"
        onPress={this._pickImage}
      />
      <Button title="OR take with camera"
      onPress={() => Actions.useCamera()}
      /></View>
      }
        {image &&
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            <Text>is this the image you want?</Text>
            <Button
              title='yes'
              onPress={this.onPressYes.bind(this)}
              />
            <Button
              title='no'
              onPress={this.onPressYes}
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
