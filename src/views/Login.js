// src/screens/Login.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Login({ navigation }) {
  const handleLogin = () => {
    // Aquí podrías agregar la lógica de autenticación
    navigation.replace('Home'); // Navega al layout Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Login;
