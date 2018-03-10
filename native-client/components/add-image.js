import React, { Component } from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View, TextInput } from 'react-native';
import { UploadImage } from './';
import axios from 'axios';
import API_ROOT from '../ip-addresses';


class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _onPressButton = () => {
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>add your look:</Text>
          <View style={styles.uploadContainer}>
          <UploadImage />
          </View>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <Text>submit</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#b77575'
  },
  textInput: {
    height: 40
  },
  uploadContainer: {
    height: 90
  }
});

export default AddImage;
