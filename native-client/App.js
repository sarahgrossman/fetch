import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Font } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import {LandingPage, AddEvent, AddImage, CameraView, EventPage} from './components';

export default class App extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'alegreya-sans': require('./assets/fonts/AlegreyaSans-Regular.ttf'),
    });
  }

  render() {
    return (
      <View>
      <ImageBackground source={require('./public/girl.jpg')} style={{width: '100%', height: '100%', opacity: 0.5}}>
      <View style={{
        position: 'absolute',
        width: '100%',
        flex: 1,
        opacity: 1
        }}>
      </View>
      </ImageBackground>
      <View style={{
        position: 'absolute',
        width: '100%',
        flex: 1,
      }}>
      <Router>
      <Scene key='root'>
      <Scene key='landingPage'
      component={LandingPage}
      title='Home'
      initial
      />
      <Scene key='addEvent'
      component={AddEvent}
      title="1. Add Event"
      />
      <Scene key='addImage'
      component={AddImage}
      title="2. Add Image"
      />
      <Scene key='useCamera'
      component={CameraView}
      title=""
      />
      <Scene key='eventPage'
      component={EventPage}
      title="Your Event"
      />
      </Scene>
      </Router>
      </View>
      </View>
    );
  }
}


