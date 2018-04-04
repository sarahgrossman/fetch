import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';
import styles from '../assets/stylesheet';
import API_ROOT from '../ip-addresses';
import axios from 'axios';


export default class LoginButton extends React.Component {
  state = {
    result: null,
    id: ''
  };

  fetchFbId = () => {
    axios.get(`${API_ROOT}/fb-auth`)
    .then(res => res.data)
    .then(data => this.setState({
      id: data
    }))
  }

  componentDidMount() {
    this.fetchFbId()
    // .catch((error) => {console.log(error)})
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.id && <Button title="Open FB Auth" onPress={this._handlePressAsync} />}
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
        </View>
    );
  }

  _handlePressAsync = async () => {

    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${this.state.id}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    this.setState({ result });
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

