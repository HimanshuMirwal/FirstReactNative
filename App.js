import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [output, setText] = useState("start typing in text box.")
  const [outputText, setOytpuText] = useState("")

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50,textDecorationLine:'underline', marginBottom:20 }}>First React App</Text>
      <Text style={{ fontSize: 20 }}>{output}</Text>
      <TextInput value={outputText} onChangeText={(e) => setOytpuText(e)} style={styles.TextInputStyle} />
      <Button title="Change text" onPress={() => { setText(outputText), setOytpuText("") }} />
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
  TextInputStyle: {
    padding: 10,
    backgroundColor: "#eee",
    fontSize: 20,
    margin: 20,
    width: 300,
    borderWidth: 2,

    // Set border Hex Color Code Here.
    borderColor: 'black',

    // Set border Radius.
    borderRadius: 20,
  }
});
