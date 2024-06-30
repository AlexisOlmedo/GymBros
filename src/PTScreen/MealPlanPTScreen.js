import React,{useState} from 'react';
import { View,Text, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';


const MealPlanPTScreen = () => {

    const[clients, setClients]= useState([
        {id: '1', name:'Client 1'},
        { id: '2', name:'Client 2'},
        {id:'3', name:'Client 3'}

    ]);

    const handleAddClient = () => {
    const newClient= {
        id: Math.random().toString(),
        name: `Client ${clients.length + 1}`,
    };
    setClients([...clients, newClient]);
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Clients</Text>
            <FlatList
            date={clients}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
                <TouchableOpacity style={styles.clientItem}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
            <Button title ="Add Client" onPress={handleAddClient}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    clientItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 5,
    },

});

export default MealPlanPTScreen;