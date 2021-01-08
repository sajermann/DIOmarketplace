import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Catalog from './pages/Catalog';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#313746'},
        }}
        initialRouteName="Catalog"
      >
        <Stack.Screen
          name="Catalogs"
          component={Catalog}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
