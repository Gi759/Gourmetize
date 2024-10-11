import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from '../assets/styles/CartScreenStyles';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <View style={styles.card}>
        <Image source={require('../assets/images/cart-coffee.jpg')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Cappuccino</Text>
        <Text style={styles.cardPrice}>$4.20</Text>
      </View>

      <Button title="Checkout" onPress={() => alert('Proceed to Payment')} color="orange" />
    </View>
  );
}
