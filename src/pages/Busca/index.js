import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Busca() {
    return (
        <View style={styles.container}> 
            <Image style={styles.ivo} source={{uri:'https://sig.ifc.edu.br/shared/verFoto?idFoto=515190&key=1a2605f7d244fbddc36dac08cf529620'}}></Image>
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