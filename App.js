import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  // Estado para la variable
  const [variable, setVariable] = useState(0);

  // Función que cambia el valor de la variable al presionar el botón
  const cambiarValor = () => {
    setVariable(variable + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        El valor de la variable es: {variable}
      </Text>
      <Button title="Cambiar valor" onPress={cambiarValor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
});