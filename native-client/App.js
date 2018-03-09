import React from 'react';
// import { Alert, Button, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import {LandingPage, AddEvent} from './components';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key='root'>
      <Scene key='landingPage'
      component={LandingPage}
      title='Home'
      initial
      />
      <Scene key='addEvent'
      component={AddEvent}
      title="Add Event"
      />
      </Scene>
      </Router>
    );
  }
}

