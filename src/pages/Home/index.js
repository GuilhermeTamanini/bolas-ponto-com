import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}> 
            <View style={styles.tudo}>
                <View style={styles.menos}>
                    <Text style={styles.textu}>"Sou gay!"</Text>
                    <Text style={styles.textu}>-Ivo gaymer 2023</Text>
                </View>
                <View style={styles.barbada}>
                <Text style={styles.seta} >⇓⇓⇓</Text>
                <Image style={styles.ivo} source={{uri:'https://sig.ifc.edu.br/shared/verFoto?idFoto=515190&key=1a2605f7d244fbddc36dac08cf529620'}}></Image>
                </View>
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
        flexDirection: 'row'

    },
    tudo:{
        flexDirection: 'row',
    },
    menos:{
        textAlign: 'center',
        justifyContent: 'center',
    },
    barbada:{
      alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      },
      textu: {
        color: '#fff',
        flexDirection:'column',
        textDecorationStyle: 'solid',
        fontSize: 40,
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