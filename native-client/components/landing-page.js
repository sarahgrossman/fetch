import React, {Component} from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

let API_ROOT
// if (IS_SIM) {
  API_ROOT = 'http://localhost:5000'
// } else {
  // API_ROOT = 'http://192.168.1.190:5000'
// }


class LandingPage extends Component {

  _onPressButton = () => {
    axios.post(`${API_ROOT}/events`)
    .then((res) => (res.data))
    .then((data) => Alert.alert(data));
    // Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>fetch</Text>
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
    backgroundColor: '#e0ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 70,
    color: '#b77575'
  }
});


export default LandingPage;
