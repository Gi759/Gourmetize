import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../assets/styles/EditProfileScreenStyles';

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#999" />

      <Button title="Save Changes" onPress={() => alert('Profile Updated')} color="orange" />
    </View>
  );
}
