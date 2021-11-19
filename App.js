import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.textoOla}>Price Fuel</Text>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button
            title="Botão 1"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Botão 2"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Botão 3"
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button
            title="Botão 4"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Botão 5"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Botão 6"
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  textoOla: {
    fontSize: 32,
    marginTop: 80,
    marginBottom: 80,
    color: '#FFF',
    fontWeight: 'bold',
  },
  VwTexto: {
    backgroundColor: 'blue'
  },
  content: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
});
