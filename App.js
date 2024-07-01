import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import MainScreen from './src/Screens/MainScreen';
import ClientPTScreen from './src/PTScreen/ClientPTScreen';

const Stack = createStackNavigator();




export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name="Main" component={ClientPTScreen}/>
        
        </Stack.Navigator>
  </NavigationContainer>
    
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Input:{
    width:'100%',
    height: 40,
    borderColor: 'balck',
    borderWidth: 1,
    marginBottom:16,
    padding:8, 
  },
  LoginButton:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius : 5,

  },
  ButtonText:{
     color:'white',
     fontSize: 16,
     textAlign: "center"
  },
  
}); 
 
