import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

const App = () => (
<>
  {/* <StatusBar style="auto" /> */}
  <StatusBar barStyle="light-content" backgroundColor="#312e38" />
  <Routes />
</>


)

export default App
