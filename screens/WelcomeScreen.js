import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../assets/styles/WelcomeScreenStyles';

const backgroundImage = require('../assets/images/background.jpg');

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Gourmetize</Text>
        <Text style={styles.subtitle}>Descubra novas receitas e compartilhe as suas!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonOutlineText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

