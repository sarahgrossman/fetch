// import { Image, TouchableOpacity, Text, View } from 'react-native';
// import React from 'react';
// import PhotoGrid from 'react-native-photo-grid';

// class ImageGrid extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { items: [] };
//     console.log('props are', this.props)
//   }

//   // componentDidMount() {
//   //   // Build an array of 60 photos
//   //   let items = this.props.uris.map((uri, i) => {
//   //     return { id: i, src: uri }
//   //   });
//   //   console.log('uris at component mount are', this.props.uris)
//   //   this.setState({ items });
//   // }

//   componentWillReceiveProps(nextProps) {
//     let items = nextProps.uris.map((uri, i) => {
//       return { id: i, src: uri }
//     });
//     this.setState({ items });
//   }

//   render() {
//     return (
//       <View>
//       <PhotoGrid
//         data = { this.state.items }
//         itemsPerRow = { 3 }
//         itemMargin = { 1 }
//         renderHeader = { this.renderHeader }
//         renderItem = { this.renderItem }
//       />
//       </View>
//     );
//   }

//   renderHeader() {
//     return (
//       <Text>I'm on top!</Text>
//     );
//   }

//   renderItem(item, itemSize) {
//     console.log('item is ', item)
//     console.log('item size is ', itemSize)
//     return (
//       <View key={item.id} style={{backgroundColor: 'blue'}} />
//     )


//     // return (
//     //   <TouchableOpacity
//     //     key = { item.id }
//     //     style = {{ width: itemSize, height: itemSize }}
//     //     onPress = { () => {
//     //       // Do Something
//     //     }}>
//     //     <Image
//     //       resizeMode = "cover"
//     //       style = {{ flex: 1 }}
//     //       source = {{ uri: item.src }}
//     //     />
//     //   </TouchableOpacity>
//     // )
//   }

// }

// export default ImageGrid;



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

// Helper functions
// thanks materialuicolors.co
// const colors = [
//   '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
//   '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
//   '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
//   '#FF5722', '#795548', '#9E9E9E', '#607D8B',
// ];

// function generateRandomColorsArray(length) {
//   return Array.from(Array(length)).map(() => colors[Math.floor(Math.random() * colors.length)]);
// }
