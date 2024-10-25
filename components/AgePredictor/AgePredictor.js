import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AgePredictor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [person, setPerson] = useState("");

  const predictAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const json = await response.json();

      if (json.age <= 25) { 
        setPerson("joven");
      } else if (json.age >= 26 && json.age <= 50) {
        setPerson("adulto");
      } else if (json.age >= 51) {
        setPerson("viejo");
      } else {
        setPerson('Nula')
      }

      setAge(json.age);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={style.container}>
        <Text>Ingrese su nombre:</Text>
            <TextInput 
              style={style.input}
              placeholder="nombre aqui"
              value={name}
              onChangeText={setName}
            />
        <Button title="Predict Age" onPress={predictAge} />
        {age ? <Text>Edad basado en el nombre: {age} la persona es {person}</Text> : null}
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
