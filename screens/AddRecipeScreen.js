// screens/AddRecipeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/AddRecipeScreenStyles';

export default function AddRecipeScreen() {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleAddRecipe = () => {
    // Lógica para adicionar a receita
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Receita</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Receita"
        value={recipeName}
        onChangeText={setRecipeName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredientes"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
