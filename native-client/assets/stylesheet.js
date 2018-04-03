import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
    backgroundColor: '#f9f9ed',
  },
  title: {
    fontFamily: 'Snell Roundhand',
    fontWeight: 'bold',
    fontSize: 70,
    color: '#F8666B',
    textShadowColor: '#383832',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  text: {
    fontFamily: 'alegreya-sans',
    fontSize: 30,
    color: '#F8666B',
    paddingTop: 50,
    paddingBottom: 50,
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
    fontFamily: 'alegreya-sans',
    color: '#383832',
  },
  upload: {
    flex: 1,
  },
  prompt: {
    fontSize: 15,
    fontFamily: 'alegreya-sans',
    color: '#383832',
    textAlign: 'center'
  }
});

export default styles;
