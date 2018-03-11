import React, { Component } from "react";
import { Text, Button, Image, View, StyleSheet } from "react-native";
import { ImagePicker } from "expo";
import { Actions } from "react-native-router-flux";
import API_ROOT from "../ip-addresses";
import styles from "../assets/stylesheet";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      eventId: this.props.eventId
    };
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  onPressYes() {
    const data = new FormData();
    const { eventId } = this.state;
    data.append("eventId", eventId);
    data.append("photo", {
      uri: this.state.image,
      type: "image/jpeg",
      name: "testPhoto"
    });
    fetch(`${API_ROOT}/images/`, {
      method: "post",
      body: data
    })
      .then(res => {
        console.log(res);
      })
      .then(() =>
        Actions.eventPage({ eventId, eventName: this.props.eventName })
      );
  }

  render() {
    let { image } = this.state;
    console.log("$$$$$THE IMAGE IS ", image);

    return (
      <View style={styles.upload}>
        {!image && (
          <View>
            <Button
              title="Choose image from library"
              onPress={this.pickImage}
            />
          </View>
        )}
        {image && (
          <View>
            <Image source={{ uri: image }} style={pageStyles.image} />
            <Text>is this the image you want?</Text>
            <Button title="yes" onPress={this.onPressYes.bind(this)} />
            <Button title="no" onPress={() => this.setState({ image: null })} />
          </View>
        )}
      </View>
    );
  }
}

const pageStyles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

export default UploadImage;
