import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Country() {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [link, setLink] = useState("");

  const DataCountry = async () => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const json = await response.json();
      
      if (json.length > 0) {
        setName(json[0].name); 
        setDomain(json[0].domains.join(", ")); 
        setLink(json[0].web_pages.join(", ")); 
      } else {
        setName("No se encontraron universidades");
        setDomain("");
        setLink("");
      }
    } catch (err) {
      console.error(err);
      setName("Error al obtener datos");
      setDomain("");
      setLink("");
    }
  };

  return (
    <View style={style.container}>
      <Text>Ingrese el pais en ingles:</Text>
      <TextInput
        style={style.input}
        placeholder="country here"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="get data" onPress={DataCountry} />
      {name ? (
        <View style={style.container}>
          <Text>Universidad: {name}</Text>
          <Text>Dominio: {domain}</Text>
          <Text>Link: {link}</Text>
        </View>
      ) : null}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: "80%",
    borderRadius: 5,
  },
});
