import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Irato</Text>
      <Image style={styles.img} source={{uri:'https://cdn.discordapp.com/attachments/1061039263296262285/1118262468565794978/ecdb3c19-1062-4bc4-8aa5-ab2ad78c65c1.jpg'}}></Image>  
    </View>
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
  text: {
    color: '#fff',
    flexDirection:'column',
    textDecorationStyle: 'solid',
    fontSize: 40,
    textDecorationColor: '#fff',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    textShadowColor: '#fff',
  },
  img:{
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 100,
  },
});