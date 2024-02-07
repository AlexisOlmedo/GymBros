import React  from'react';
import {View, Text, Button,StyleSheet,TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = () =>{
    return (
   <View style={styles.container}>
      <Text style={styles.Title}>Login</Text>
      <TextInput style={styles.Input} placeholder="Username" > </TextInput>
      <TextInput style={styles.Input} placeholder="Password" > </TextInput>
      <TouchableOpacity style={styles.LoginButton} ><Text style={styles.ButtonText}>Login</Text></TouchableOpacity>
      
      
    </View>

    );


};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  LoginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;