import React, {Component} from 'react';
import { Alert, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import API_ROOT from '../ip-addresses';


class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: false,
      imageUri: ''
    }
  }

  componentDidMount() {
  axios.get(`${API_ROOT}/images`)
  .then(res => res.data)
  .then(data => {
    console.log('###DATA IS ', data);
    this.setState({
      imageUri: data
    })
  })
  .then(() => console.log('state is ', this.state))
  .catch(err => console.log(err));
  }

  render() {
    const { images, imageUri } = this.state;
      return (
        <View>
          {}
            <TouchableHighlight onPress={() => Actions.addEvent()} underlayColor="white">
              <View>
              <Image
                style={styles.image}
                source={{uri: imageUri}} />
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
  image: {
    width: 100,
    height: 100
  }

});


export default EventPage;
