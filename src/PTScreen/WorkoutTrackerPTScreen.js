import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';

const WorkoutTrackerPTScreen = () => {
  const [clients, setClients] = useState([
    { id: '1', name: 'Client 1', workoutPlan: {} },
    { id: '2', name: 'Client 2', workoutPlan: {} },
    { id: '3', name: 'Client 3', workoutPlan: {} },
  ]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [editable, setEditable] = useState(true);

  const handleAddClient = () => {
    const newClient = {
      id: Math.random().toString(),
      name: `Client ${clients.length + 1}`,
      workoutPlan: {},
    };
    setClients([...clients, newClient]);
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client);
    setWorkoutPlan(client.workoutPlan || {});
  };

  const handleSaveWorkoutPlan = () => {
    const updatedClients = clients.map((client) =>
      client.id === selectedClient.id ? { ...client, workoutPlan: workoutPlan } : client
    );
    setClients(updatedClients);
    setSelectedClient(null);
    setWorkoutPlan({});
  };

  const handleChangeWorkoutPlan = () => {
    setEditable(true);
  };

  const handleWorkoutChange = (day, field, value) => {
    setWorkoutPlan({
      ...workoutPlan,
      [day]: {
        ...workoutPlan[day],
        [field]: value,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Clients</Text>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.clientItem} onPress={() => handleSelectClient(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
      <Button title="Add Client" onPress={handleAddClient} />

      {selectedClient && (
        <View style={styles.workoutPlanContainer}>
          <Text style={styles.heading}>Workout Plan for {selectedClient.name}</Text>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <View key={day} style={styles.dayContainer}>
              <Text style={styles.dayLabel}>{day}</Text>
              <TextInput
                style={styles.input}
                placeholder="Workout Title"
                value={workoutPlan[day]?.title || ''}
                editable={editable}
                onChangeText={(text) => handleWorkoutChange(day, 'title', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Exercises and Reps"
                value={workoutPlan[day]?.exercises || ''}
                editable={editable}
                onChangeText={(text) => handleWorkoutChange(day, 'exercises', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Instructions"
                value={workoutPlan[day]?.instructions || ''}
                editable={editable}
                onChangeText={(text) => handleWorkoutChange(day, 'instructions', text)}
              />
            </View>
          ))}
          <Button title="Save Workout Plan" onPress={handleSaveWorkoutPlan} />
          {!editable && <Button title="Change Workout Plan" onPress={handleChangeWorkoutPlan} />}
        </View>
      )}
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
  flatListContainer: {
    paddingBottom: 20,
  },
  workoutPlanContainer: {
    marginTop: 20,
  },
  dayContainer: {
    marginBottom: 10,
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default WorkoutTrackerPTScreen;