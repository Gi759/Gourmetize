import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../assets/styles/ProfileScreenStyles';

export default function ProfileScreen({ navigation }) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [userProfile, setUserProfile] = useState({});
  const [favorites, setFavorites] = useState([]);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const loadUserProfile = async () => {
      const profile = await AsyncStorage.getItem('userProfile');
      if (profile) {
        setUserProfile(JSON.parse(profile));
      }
    };

    const loadFavorites = async () => {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    };

    loadUserProfile();
    loadFavorites();
  }, []);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permissão Negada', 'É necessário permitir o acesso à galeria');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setProfilePhoto(result.uri);
      const updatedProfile = { ...userProfile, profilePhoto: result.uri };
      await AsyncStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    }
  };

  const renderFavoriteItem = ({ item }) => (
    <View style={[styles.favoriteItem, { width: windowWidth * 0.35 }]}>
      <Image source={item.image} style={styles.favoriteImage} />
      <Text style={styles.favoriteName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={profilePhoto ? { uri: profilePhoto } : require('../assets/images/default-profile.jpg')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.username}>{userProfile?.username || 'Nome de Usuário'}</Text>

      <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Receitas Favoritas</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={renderFavoriteItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.favoriteList}
      />
    </View>
  );
}
