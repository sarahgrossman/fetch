import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import API_ROOT from "../ip-addresses";
import styles from "../assets/stylesheet";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "default_event",
      eventName: "default_name"
    };
  }

  addEventButton = () => {
    axios
      .post(`${API_ROOT}/events`, { name: this.state.text })
      .then(res => res.data)
      .then(data => Actions.addImage({ eventId: data.id }))
      .catch(error => console.log(error));
  };

  findEventButton = () => {
    console.log(this.state.eventName, "is the event name");
    axios
      .get(`${API_ROOT}/events/${this.state.eventName}`)
      .then(res => res.data)
      .then(data =>
        Actions.eventPage({ eventId: data.id, eventName: data.name })
      )
      .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={pageStyles.container}>
        <Text style={styles.text}>add event:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          placeholder="new event"
        />
        <Button title="submit" onPress={this.addEventButton} />
        <Text style={styles.or}>OR</Text>
        <Text style={styles.text}>search by name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ eventName: text })}
          placeholder="event name here"
        />
        <Button title="submit" onPress={this.findEventButton.bind(this)} />
      </View>
    );
  }
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: '30%',
    // position: "absolute",
    // width: "100%",
    opacity: 1
  }
});

export default AddEvent;
