import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../assets/stylesheet';
import {LoginButton} from './'


function LandingPage () {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>    fetch   </Text>
          <TouchableHighlight onPress={() => Actions.addEvent()} underlayColor="white">
            <View>
              <Text>get started</Text>
              {/* <LoginButton /> */}
            </View>
          </TouchableHighlight>
        </View>
    )
}

export default LandingPage;
