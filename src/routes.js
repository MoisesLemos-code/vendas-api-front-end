import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cliente from './pages/Cliente/index';
import Main from './pages/Main/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Menu'
      >
        <Stack.Screen name="Cliente"
          component={Cliente}
          options={{ title: "Cadastro de Cliente" }} />
        <Stack.Screen name="Menu" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}