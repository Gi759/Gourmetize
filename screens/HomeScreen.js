import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../assets/styles/HomeScreenStyles';

export default function HomeScreen({ navigation }) {
  const [userProfile, setUserProfile] = useState(null);
  const [recipes, setRecipes] = useState([ /* Dados de receitas simulados */
    { id: '1', name: 'Lasanha', image: require('../assets/images/lasanha.jpeg'), time: '45 min' },
    { id: '2', name: 'Pizza Margherita', image: require('../assets/images/pizza.jpeg'), time: '30 min' },
    { id: '3', name: 'Hambúrguer Gourmet', image: require('../assets/images/burger.jpeg'), time: '20 min' },
  ]);

  useEffect(() => {
    const loadUserProfile = async () => {
      const profile = await AsyncStorage.getItem('userProfile');
      if (profile) {
        setUserProfile(JSON.parse(profile));
      }
    };
    loadUserProfile();
  }, []);
  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", onPress: async () => {
          await AsyncStorage.removeItem('userProfile');
          await AsyncStorage.removeItem('userToken');
          navigation.replace('Login');
        }}
      ]
    );
  };

  const renderRecipeCard = ({ item }) => (
    <View style={styles.recipeCard}>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{item.name}</Text>
      <Text style={styles.recipeTime}>{item.time}</Text>
      <TouchableOpacity style={styles.favoriteButton}>
        <Text style={styles.favoriteButtonText}>❤️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {userProfile?.username || 'Usuário'}</Text>

      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={renderRecipeCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recipeList}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeoRecipes')}>
        <Text style={styles.buttonText}>Receitas pelo mundo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Meu Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
