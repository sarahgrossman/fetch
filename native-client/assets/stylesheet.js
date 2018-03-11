import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
    // backgroundColor: 'green',
  },
  title: {
    fontFamily: 'Snell Roundhand',
    fontWeight: 'bold',
    fontSize: 70,
    color: '#b77575',
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  text: {
    fontFamily: 'alegreya-sans',
    fontSize: 30,
    color: '#b77575',
    paddingTop: 50,
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  textInput: {
    height: 40,
    width: 200,
    textAlign: 'center'
  },
  or: {
    paddingTop: 50,
    fontSize: 15,
    fontFamily: 'Arial',
    color: '#b77575',
  },
  upload: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // position: 'relative',
    // width: '100%',
    // height: null
  },
  uploadContainer: {
    // height: 90
  }
});

export default styles;
