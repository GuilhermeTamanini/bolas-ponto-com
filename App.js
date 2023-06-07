import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Routes from './src/routes.js'; 

export default function App() {
  return (
    <Fragment>
    <View style={styles.container}>
      <Text style={styles.seta} >⇓⇓⇓</Text>
      <Image style={styles.ivo} source={{uri:'https://sig.ifc.edu.br/shared/verFoto?idFoto=515190&key=1a2605f7d244fbddc36dac08cf529620'}}></Image>
      <Routes />
      <Text style={styles.textu}>Sou gay!</Text>
      <Text style={styles.textu}>Ivo gaymer</Text>
      <Text style={styles.odio}>Eu te odeio!</Text>
      <Text style={styles.assinado}>ass: ivo gaymer da silva</Text>
      <StatusBar style="dark-content" />
    </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  textu: {
    color: '#fff',
    textDecorationStyle: 'solid',
    fontSize: 40,
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    textShadowColor: '#fff',
  },
  ivo:{
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  odio:{
    color: 'red',
    textDecorationStyle: 'solid',
    fontSize: 70,
    textDecorationLine: 'underline',
    textDecorationColor: 'crimson',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    textShadowColor: 'black',
  },
  assinado:{
    color: 'grey',
    textDecorationStyle: 'solid',
    fontSize: 10,
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    textShadowColor: 'grey',
  },
  seta:{
    fontSize: 50,
  }
});
