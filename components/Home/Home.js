import React from "react";
import {View, Image, StyleSheet} from "react-native";

export default function Home({}) {
    return (
        <View style={style.container}>
            <Image source={require('../../assets/herramientas.jpg')} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });