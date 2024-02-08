import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/Screens/LoginScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
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
 
