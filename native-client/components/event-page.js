import React, {Component} from 'react';
import {ImageGrid} from './';
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import API_ROOT from '../ip-addresses';


class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUris: []
    }
  }

  componentDidMount() {
  axios.get(`${API_ROOT}/images/${this.props.eventId}`)
  .then(res => res.data)
  .then(images => {
    const imageUris = images.map(image => `${API_ROOT}/images/${image.uri}`);
    this.setState({
      imageUris
    })
  })
  .catch(err => console.log(err));
  }

  render() {
    console.log('props on page are ', this.props)
    const { imageUris } = this.state;
      return (
      <View
      style={styles.container}
      >
          <Text style={styles.text}>{this.props.eventName}</Text>
          <ImageGrid style={styles.container} uris={imageUris} />
          <Button
            title='add photo'
            // style={styles.button}
            onPress={() => Actions.addImage({eventId: this.props.eventId, eventName: this.props.eventName})}
            />
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0'
  },
  text: {
    fontFamily: 'alegreya-sans',
    fontSize: 30,
    color: '#F8666B',
    paddingTop: 20,
    textAlign: 'center',
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
});


export default EventPage;
