import React, {Component} from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';

let API_ROOT
// if (IS_SIM) {
  API_ROOT = 'http://localhost:5000'
// } else {
  // API_ROOT = 'http://192.168.1.190:5000'
// }


class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'your event name here'
    }
  }

  _onPressButton = () => {
    console.log(this.state.text);
    axios.post(`${API_ROOT}/events`, {name: this.state.text})
    .then((res) => (res.data))
    .then((data) => Alert.alert(data));
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>add event:</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          >
          </TextInput>
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
  }
});

export default AddEvent;
