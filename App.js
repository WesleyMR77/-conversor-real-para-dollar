import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react'


export default function App() {
  const [calc, setCalc] = useState(0);
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.textSize1 }>Conversor de Real para Dollar</Text>

      <Text style={styles.textSize2 }>Digite o valor em real</Text>
      <TextInput style={styles.inputReal}  
      placeholder="Type here to translate!"
      onChangeText={newText => setCalc(newText)}
      defaultValue={calc}/>

      <Text style={styles.textSize2 } >O valor convertido é de: </Text>

      <Text style={{padding: 10, fontSize: 42}}>
        {"$ " + (calc/5.15).toFixed(2)}
      </Text>

      <StatusBar style="auto" />
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
  inputReal: {
    border: 'solid',
    color: 'black',
  },
  textSize1:{
    fontSize: '2rem',
    marginTop: '1rem',
  },
  textSize2:{
    fontSize: '1.2rem',
    marginTop: '1rem',
  }
});
