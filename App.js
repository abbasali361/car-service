import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  document.title='Car-Service'
  return (
    <View style={styles.container}>
      <Header 
       name="Home"
       component={Header}
       options={{ title: 'My home' }}
      />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
