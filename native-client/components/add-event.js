import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import API_ROOT from '../ip-addresses';


class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEvent: 'default_event'
    }
    // this.onChangeText = this.onChangeText.bind(this);
  }

  addEventButton = () => {
    axios.post(`${API_ROOT}/events`, {name: this.state.text})
    .then((res) => (res.data))
    .then(() => Actions.addImage())
    .catch(error => console.log(error));
  }

  createEventButton = () => {
    axios.get(`${API_ROOT}/events`)
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>add event:</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(newEvent) => this.setState({newEvent})}
          // value={this.state.text}
          placeholder='new event'
          >
          </TextInput>
          <Button
            title="submit"
            onPress={this.addEventButton}>
          </Button>
          <Text style={styles.or}>OR</Text>
          <Text style={styles.title}>search by name:</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          // value={this.state.text}
          placeholder='submit'
          >
          </TextInput>
          <Button
            title="find event"
            onPress={() => Actions.eventPage()}
            >
            </Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ecef',
    alignItems: 'center',
    paddingTop: 50
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#b77575',
    paddingTop: 50
  },
  textInput: {
    height: 40,
    width: 200,
    textAlign: 'center'
  },
  or: {
    paddingTop: 50,
    fontSize: 15,
    fontFamily: 'Arial',
    color: '#b77575',
  }
});

export default AddEvent;
