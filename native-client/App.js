import React from 'react'
import { View } from 'react-native'
import { Font } from 'expo'
import { Router, Scene } from 'react-native-router-flux'
import {LandingPage, AddEvent, AddImage, EventPage, SingleImage} from './components'

export default class App extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'alegreya-sans': require('./assets/fonts/AlegreyaSans-Regular.ttf'),
    })
  }

  render() {
    return (
      <View style={{height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#FCFBE3' }}>
          <Router>
            <Scene key='root'>
              <Scene key='landingPage' component={LandingPage} title='Home' initial />
              <Scene key='addEvent' component={AddEvent} title="1. Add Event" />
              <Scene key='addImage' component={AddImage} title="2. Add Image" />
              <Scene key='eventPage' component={EventPage} title="Your Event" />
              <Scene key='singleImage' component={SingleImage} title="Close Up" />
            </Scene>
          </Router>
        </View>
      </View>
    )
  }
}
