import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import API_ROOT from '../ip-addresses';


class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'default_event',
      eventName: 'default_name'
    }
  }

  addEventButton = () => {
    axios.post(`${API_ROOT}/events`, {name: this.state.text})
    .then(res => res.data)
    .then(data => Actions.addImage({eventId: data.id}))
    .catch(error => console.log(error));
  }

  findEventButton = () => {
    console.log(this.state.eventName, 'is the event name')
    axios.get(`${API_ROOT}/events/${this.state.eventName}`)
    .then(res => res.data)
    .then(data => Actions.eventPage({eventId: data.id}))
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>add event:</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder="new event"
           />
          <Button
            title="submit"
            onPress={this.addEventButton} />
          <Text style={styles.or}>OR</Text>
          <Text style={styles.title}>search by name:</Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({eventName: text})}
          placeholder="event name here"
           />
          <Button
            title="submit"
            onPress={this.findEventButton.bind(this)}
             />
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
