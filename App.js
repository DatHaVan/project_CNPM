import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet,Modal,Text,Image,TextInput, View ,TouchableOpacity, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import KhaiSinh from './KhaiSinh';
import Khaibao from './Khaibao';

const Stack = createNativeStackNavigator();
export default function App() {
  return ( 
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="KhaiSinh" component={KhaiSinh} />
   <Stack.Screen name="Khaibao" component={Khaibao} />
 </Stack.Navigator>
</NavigationContainer> 
 );
};

