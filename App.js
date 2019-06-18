
import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import background from './images/imageinicial.png';
import icone from './images/seta.png';

export default class App extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={background}
        style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigate('inicio')}>
          <Text style={styles.text}>CONTINUAR</Text>
          <Image style={styles.icone} source={icone} alt="seta" />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    minHeight: "100%"
  },
  button: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009494",
    borderRadius: 10,
    marginBottom: 40,
    flexDirection: "row"
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginRight: 10
  },
  icone: {
    width: 20,
    height: 20
  }

});
