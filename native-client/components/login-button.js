import React from 'react'
import { Button, Text, View } from 'react-native'
import { AuthSession } from 'expo'
import styles from '../assets/stylesheet'

export default class LoginButton extends React.Component {
  state = {
    result: null
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.id && (
          <Button title='Open FB Auth' onPress={this._handlePressAsync} />
        )}
        {this.state.result
          ? (<Text>{JSON.stringify(this.state.result)}</Text>)
          : null}
      </View>
    )
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=2059028964339773` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`
    })
    this.setState({ result })
  }
}
