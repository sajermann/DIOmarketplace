import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Catalog from './src/pages/Catalog';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, DIO</Text>
      <Catalog />
    </View>
  );
}
