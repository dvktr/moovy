import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Default from './src/pages/Default';
import Slider from './src/pages/Slider';
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

export default function App() {

  return(
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Slider" 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Slider" component={Slider}/>
        <Stack.Screen name="Default" component={Default}/>
        <Stack.Screen name="Home" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
/*
   <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Slider" 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Slider" component={Slider}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    */ 