import React, {Component} from 'react';
import { Alert, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
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
    const imageUris = images.map(image => image.uri);
    console.log('###URIS ARE ', imageUris);
    this.setState({
      imageUris
    })
  })
  .then(() => console.log('state is ', this.state))
  .catch(err => console.log(err));
  }

  render() {
    console.log('props are', this.props)
    const { imageUris } = this.state;
      return (
        <View>
          <Text>{this.props.eventName}</Text>
              {imageUris.length > 0 && imageUris.map(
                uri => {
                  return (
                    <Image
                key={uri}
                style={styles.image}
                source={{uri}} />
                  )
                }
              )}
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
    fontFamily: 'Snell Roundhand',
    fontSize: 70,
    color: '#b77575'
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   width: null,
  //   height: null
  // }
  image: {
    width: 100,
    height: 100
  }

});


export default EventPage;
