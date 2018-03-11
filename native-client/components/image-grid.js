import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import Grid from 'react-native-grid-component';

export default class ImageGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let items = nextProps.uris.map((uri, i) => {
          return { id: i, src: uri }
      });
      this.setState({
        data: items
      });
      }

  _renderItem = (data) =>
    <View style={styles.item} key={data.id}>
    <Image source={{uri: data.src}} style={styles.item}/>
     </View>

  render() {
    console.log(this.state.data, 'is data in image grid')
    return (
      <Grid
        style={styles.list}
        renderItem={this._renderItem}
        data={this.state.data}
        itemsPerRow={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
    margin: 1,
  },
  list: {
    flex: 1,
  },
});
