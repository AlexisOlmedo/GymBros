import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; 

const WeightTrackerScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [isWeightEditable, setIsWeightEditable] = useState(true);
  const [weightData, setWeightData] = useState([]);

  const saveData =() => { // save the date to a backedn server or local
    const newDataPoint ={ date: new Date().toLocaleDateString(), weight: parseFloat(weight)};
    setWeightData([...weightData, newDataPoint]);
    setIsWeightEditable(false);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weight Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />

         <TextInput
          style={[styles.input, !isWeightEditable && styles.disabledInput]}
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          editable = {isWeightEditable}
          />

      </View>
      <Button title="Save Data"  onPress ={saveData} />

    

      <View style={styles.tableContainer}>
      <Text style={styles.tableHeader}>Date</Text>
      <Text style={styles.tableHeader}>Weight</Text>
        <FlatList
        data={weightData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>(
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.date}</Text>
            <Text style={styles.tableCell}>{item.weight}</Text>
          </View>
        )}

        />
      </View>
      </View>

      
)}
     

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  chartContainer: {
    marginTop: 20,
  },

  tableContainer: {
    width: '100%',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    flexDirection: 'column',
    
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    
  
  },


});

export default WeightTrackerScreen;
