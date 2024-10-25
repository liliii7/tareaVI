import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function GenderPredictor() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [backColor, setBackColor] = useState("#ffffff");

  const predictGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const json = await response.json();

      if (json.gender === "male") { 
        setBackColor("#ADD8E6");
      } else if (json.gender === "female") {
        setBackColor("#FFB6C1");
      } else {
        setBackColor("#D3D3D3");
      }

      setGender(json.gender);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={[style.container, { backgroundColor: backColor}]}>
        <Text>Ingrese su nombre:</Text>
            <TextInput 
              style={style.input}
              placeholder="nombre aqui"
              value={name}
              onChangeText={setName}
            />
        <Button title="Predict Gender" onPress={predictGender} />
        {gender ? <Text>Género Predicho: {gender}</Text> : null}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '80%',
    borderRadius: 5,
  },
});
