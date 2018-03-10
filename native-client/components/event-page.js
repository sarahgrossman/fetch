import React, {Component} from 'react';
import { Alert, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import API_ROOT from '../ip-addresses';


class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: false
    }
  }

  // getImages = () => fetch(`${API_ROOT}/images/`)
  // .then((images) => {
  //   <Image source={'localhost:5000/public/images/9ec911c2a5e5ece209cd5940779f67fb} />
  // })

  render() {
    // this.getImages();
    const { images } = this.state;
    return (
      <View>
        {}
          <TouchableHighlight onPress={() => Actions.addEvent()} underlayColor="white">
            <View>
              <Text>Images will go here</Text>
              <Image source={'localhost:5000/public/images/9ec911c2a5e5ece209cd5940779f67fb'} />
            </View>
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
});


export default EventPage;
