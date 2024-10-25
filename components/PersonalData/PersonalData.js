import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PersonalData() {
  return (
    <View style={style.container}>
        <Text>Lidia Maria Quiñones</Text>
        <Image source={require("../../assets/fotomia2.jpg")} />
        <Text>Correo: lidiaquinones2005@gmail.com</Text>
        <Text>Numero: 849-652-1501</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
