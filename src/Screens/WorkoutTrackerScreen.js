import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Button, TextInput, StyleSheet } from 'react-native';

const WorkoutTrackerScreen = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState([]);

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const workoutData = {
    Monday: [{ exercise: 'Push-ups', sets: 3, reps: 10 }, { exercise: 'Squats', sets: 4, reps: 12 }],
    Tuesday: [{ exercise: 'Bench Press', sets: 3, reps: 8 }, { exercise: 'Leg Press', sets: 3, reps: 12 }],
    // ... add data for other days
  };

  const handleDayPress = (day) => {
    setSelectedDay(day);
    setShowModal(true);
  };


  

  const handleSaveProgress = () => {
    // Save progress to a backend server or local storage
    console.log('Progress saved:', progress);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weekly Workout Plan</Text>
      <FlatList
        data={weekDays}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dayButton} onPress={() => handleDayPress(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>{selectedDay} Workout Plan</Text>
          <FlatList
            data={workoutData[selectedDay]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.exerciseItem}>
                <Text>{item.exercise}</Text>
                <Text>Sets: {item.sets}</Text>
                <Text>Reps: {item.reps}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter reps done"
                  keyboardType="numeric"
                  onChangeText={(text) => setProgress([...progress, { exercise: item.exercise, repsDone: text }])}
                />
              </View>
            )}
          />
          <Button title="Save Progress" onPress={handleSaveProgress} />
          <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseItem: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default WorkoutTrackerScreen;