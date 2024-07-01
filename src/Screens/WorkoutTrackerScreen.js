import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Button, TextInput, StyleSheet, Switch } from 'react-native';

const WorkoutTrackerScreen = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

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
    console.log('Progress saved:', progress);
    setShowModal(false);
  };

  const [isEnable, setIsEnable] = useState(true);
  const [text, setText] = useState('Client/Personal Trainer');

  const toggleSwitch = () => {
    setText(isEnable ? 'Client' : 'Personal Trainer');
    setIsEnable((prevState) => !prevState);
    setShowButton((prevState) => !prevState);
  };

  const handleWorkoutChange = (day, exercise, sets, reps) => {
    const updatedPlan = { ...workoutPlan };
    updatedPlan[day].push({ exercise, sets, reps });
    setWorkoutPlan(updatedPlan);
  };

  const renderWorkoutPlanForm = () => (
    <View>
      <Text style={styles.modalHeading}>{selectedDay} Workout Plan</Text>
      {['exercise', 'sets', 'reps'].map((field) => (
        <View key={field} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${field}`}
            onChangeText={(text) => handleWorkoutChange(selectedDay, field === 'exercise' ? text : null, field === 'sets' ? text : null, field === 'reps' ? text : null)}
          />
        </View>
      ))}
      <Button title="Save" onPress={() => setShowModal(false)} />
    </View>
  );

  const renderPTWorkoutPlan = () => (
    <View>
      <Text style={styles.modalHeading}>{selectedDay} Workout Plan</Text>
      {workoutData[selectedDay]?.map((item, index) => (
        <View key={index} style={styles.exerciseItem}>
          <Text>Exercise: {item.exercise}</Text>
          <Text>Sets: {item.sets}</Text>
          <Text>Reps: {item.reps}</Text>
        </View>
      ))}
      <Button title="Close" onPress={() => setShowModal(false)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weekly Workout Plan</Text>
      <Text style={styles.SwitchButtonText}>{text}</Text>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: 'red', true: 'green' }}
          ios_backgroundColor={'blue'}
          onValueChange={toggleSwitch}
          value={isEnable}
        />
      </View>

      <FlatList
        data={weekDays}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dayButton} onPress={() => handleDayPress(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        numColumns={1}
      />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          {isEnable ? renderWorkoutPlanForm() : renderPTWorkoutPlan()}
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
    marginBottom: 20,
    
    
  },
  dayButton: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 150,
    paddingVertical: 25,
    marginTop: 10,
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 60,
    margin: 30,
  },
  exerciseItem: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  SwitchButtonText: {
    alignSelf:'center',
    marginBottom: -20,
  },
  switchContainer:{
    alignSelf:'left',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  addButton:{
    alignSelf:'center',

  }
});

export default WorkoutTrackerScreen;