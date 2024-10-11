import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../assets/styles/FavoritesScreenStyles';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData) {
        setFavorites(JSON.parse(favoritesData));
      }
    };
    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Recipe', { recipe: item })}>
              <Text style={styles.viewRecipeButton}>Ver Receita</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
