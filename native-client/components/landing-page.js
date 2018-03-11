import React, {Component} from 'react';
import { Alert, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class LandingPage extends Component {

  render() {
    return (
      <View style={styles.container}>
      {/* <Image source={require('../public/background.jpeg')} style={styles.backgroundImage} /> */}
          <Text style={styles.title}>    fetch   </Text>
          <TouchableHighlight onPress={() => Actions.addEvent()} underlayColor="white">
            <View>
              <Text>get started</Text>
            </View>
          </TouchableHighlight>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e0ecef',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 200
  },
  title: {
    fontFamily: 'Snell Roundhand',
    fontWeight: 'bold',
    fontSize: 70,
    color: '#b77575',
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   width: null,
  //   height: null
  // }
});


export default LandingPage;
