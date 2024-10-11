import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import styles from '../assets/styles/GeoRecipeScreenStyles';

export default function GeoRecipeScreen() {
  const tomTomApiKey = 'SUA_API_KEY_TOMTOM';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://api.tomtom.com/maps-web-sdk/4.47.6/examples/basic-map.html?key=${tomTomApiKey}` }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
