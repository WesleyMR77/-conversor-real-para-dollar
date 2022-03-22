import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState(0);
  const [dollar, setDollar] = useState(0);


  function calcDollar(){
    alert("sadsa")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textSize1}>Conversor de Real para Dollar</Text>

      <Text style={styles.textSize2}>Digite o valor em real</Text>
      <TextInput
        style={styles.inputReal}
        placeholder="Type here to translate!"
        onChangeText={(calc) => setCalc(calc)}
        defaultValue={calc}
      />

      <Button 
      
        onPress={ () => setDollar(alert("A quantidade em dollar é de: " +(calc/5.15).toFixed(2)))}
        title="Calcular"
        color="#841584"     
        accessibilityLabel="Efetuar Calculo"
      />
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputReal: {
    border: "solid",
    color: "black",
    marginBottom: "1rem"
  },
  textSize1: {
    fontSize: "2rem",
    marginTop: "1rem",
  },
  textSize2: {
    fontSize: "1.2rem",
    marginTop: "1rem",
    marginBottom: "1rem"
  },
});
