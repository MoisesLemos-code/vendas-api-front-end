import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import clienteCadastro from './clienteCadastro'
import clienteLista from './clienteLista'


const Tab = createBottomTabNavigator();

export default function Cliente({ }) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Cadastro') {
              iconName = 'user-edit';
            } else if (route.name === 'Lista') {
              iconName = 'list-alt'
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#667581',
          inactiveTintColor: '#CCC',
        }}
      >
        <Tab.Screen name="Cadastro" component={clienteCadastro} />
        <Tab.Screen name="Lista" component={clienteLista} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

