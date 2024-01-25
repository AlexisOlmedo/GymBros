import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.Title}>Login</Text>
      <TextInput style={styles.Input} placeholder="Username" > </TextInput>

      <TextInput style={styles.Input} placeholder="Password" > </TextInput>
      <TouchableOpacity style={styles.LoginButton} ><Text style={styles.ButtonText}>Login</Text></TouchableOpacity>
      <StatusBar style="auto" />
      
    </View>
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
 
