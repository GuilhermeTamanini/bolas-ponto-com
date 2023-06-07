import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}> 
              <View style={styles.container}>
      <Text style={styles.seta} >⇓⇓⇓</Text>
      <Image style={styles.ivo} source={{uri:'https://sig.ifc.edu.br/shared/verFoto?idFoto=515190&key=1a2605f7d244fbddc36dac08cf529620'}}></Image>
      <Text style={styles.textu}>Sou gay!</Text>
      <Text style={styles.textu}>Ivo gaymer</Text>
      <Text style={styles.odio}>Eu te odeio!</Text>
      <Text style={styles.assinado}>ass: ivo gaymer da silva</Text>
    </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});