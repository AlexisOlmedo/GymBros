import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; 

const WeightTrackerScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [isWeightEditable, setIsWeightEditable] = useState(true);
  const [weightData, setWeightData] = useState([]);

  const saveData =() => { // save the date to a backedn server or local
    const newDataPoint = { date: new Date().toLocaleDateString(), weight: parseFloat(weight) };
    if (!isNaN(newDataPoint.weight)) {
      setWeightData([...weightData, newDataPoint]);
      setIsWeightEditable(false);
    }
  };

const enableWeightEditing = () => {
    setIsWeightEditable(true);
}
 

  const chartData = {
    labels: weightData.map(data => data.date),
    datasets: [
      {
        data: weightData.map(data => data.weight),
      }
    ]
  };

  const screenWidth = Dimensions.get('window').width;



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
      <Button title="Save Data" onPress={saveData} />
      {!isWeightEditable && <Button title="Edit Weight" onPress={enableWeightEditing} />}

      <View style={styles.chartContainer}>
        {weightData.length > 0 ? (
          <LineChart
            data={chartData}
            width={screenWidth - 20}
            height={220}
            yAxisLabel=""
            yAxisSuffix="kg"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726'
              }
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        ) : (
          <Text>No data available to display the chart.</Text>
        )}
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.tableHeader}>Date</Text>
        <Text style={styles.tableHeader}>Weight</Text>
        <FlatList
          data={weightData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.date}</Text>
              <Text style={styles.tableCell}>{item.weight}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
    

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
