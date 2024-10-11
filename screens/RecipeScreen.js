import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../assets/styles/RecipeScreenStyles';

export default function RecipeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=SUA_API_KEY');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  const saveToFavorites = async (recipe) => {
    try {
      const favorites = await AsyncStorage.getItem('favorites') || '[]';
      const parsedFavorites = JSON.parse(favorites);
      parsedFavorites.push(recipe);
      await AsyncStorage.setItem('favorites', JSON.stringify(parsedFavorites));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => saveToFavorites(item)}>
              <Text style={styles.favoriteButton}>⭐</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
