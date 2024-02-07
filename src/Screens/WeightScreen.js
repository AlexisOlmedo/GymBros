import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; 

const WeightTrackerScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [weightData, setWeightData] = useState([]);

  const saveData = () => {
    // Save data to a backend server or local storage
    const newDataPoint = { date: new Date().toLocaleDateString(), weight: parseFloat(weight) };
    setWeightData([...weightData, newDataPoint]);
    setHeight('');
    setWeight('');
    setAge('');
  };

  useEffect(() => {
    // You may fetch data from a backend server here
    // For simplicity, using dummy data
    const dummyData = [
      { date: '01/01/2022', weight: 70 },
      { date: '02/01/2022', weight: 69.5 },
      // Add more data points as needed
    ];
    setWeightData(dummyData);
  }, []);

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
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </View>
      <Button title="Save Data" onPress={saveData} />
      
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: weightData.map((data) => data.date),
            datasets: [
              {
                data: weightData.map((data) => data.weight),
              },
            ],
          }}
          width={300}
          height={200}
          yAxisSuffix="kg"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default WeightTrackerScreen;
