import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { UploadImage } from './';

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _onPressButton = () => {
  }

  render() {
    console.log('the event in add image is ', this.props.eventId)
    const { eventId, eventName } = this.props;
    return (
      <View style={styles.container}>
          <Text style={styles.text}>add your look:</Text>
          <View style={styles.uploadContainer}>
          <UploadImage eventId={eventId} eventName={eventName} />
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
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 300
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#b77575',
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  uploadContainer: {
    height: 90
  }
});

export default AddImage;
