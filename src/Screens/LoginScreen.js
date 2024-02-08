import React, {isValidElement, useState}  from 'react';
import {View, Text, Button, StyleSheet,TextInput, TouchableOpacity, Switch} from 'react-native';

const LoginScreen = () =>{
  const [ isEnable, setIsEnable] = useState(true);
  const [text, setText] = useState('Client/Personal Trainer');

  const toggleSwitch = () =>{
    if (isEnable) {
      setText('Client')
    } else{
      setText('Personal Trainer')
    }
    setIsEnable(previousState => !previousState)
  }
    return (
   <View style={styles.container}>
      <Text style ={{fontWeight: 'bold', margin:20}}>{text}</Text>
      <Switch
      trackColor={{false:'red', true:'green'}}
      ios_backgroundColor={'blue'}
      onValueChange={toggleSwitch}
      value={isEnable}/>

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