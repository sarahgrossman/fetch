import React, {Component} from 'react';
import { Alert, Image, TouchableHighlight, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FadeIn from 'react-native-fade-in-image';
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
    const { imageUris } = this.state;
      return (
        <View>
          <Text style={styles.text}>{this.props.eventName}</Text>
              {imageUris.length > 0 && imageUris.map(
                uri => {
                  console.log('uri is', uri);
                  return (
                    <FadeIn key={uri}>
                    <Image
                style={styles.image}
                source={{uri}} />
                </FadeIn>
                  )
                }
              )}
          <Button
            title='add photo'
            onPress={() => Actions.addImage({eventId: this.props.eventId, eventName: this.props.eventName})}
            />
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Snell Roundhand',
    fontSize: 70,
    color: '#b77575'
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    fontFamily: 'alegreya-sans',
    fontSize: 30,
    color: '#b77575',
    paddingTop: 20,
    textAlign: 'center',
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
});


export default EventPage;
