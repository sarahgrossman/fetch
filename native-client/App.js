import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import {LandingPage, AddEvent, AddImage, CameraView, EventPage} from './components';

export default class App extends React.Component {

  render() {
    return (
      <ImageBackground source={require('./public/background.jpeg')} style={{width: '100%', height: '100%', opacity: 0.5}}>
      <View style={{
        position: 'absolute',
        width: '100%' }}>
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
      </ImageBackground>
    );
  }
}

