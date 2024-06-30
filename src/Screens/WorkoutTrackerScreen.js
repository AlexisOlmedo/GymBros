import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Button, TextInput, StyleSheet, Switch } from 'react-native';

const WorkoutTrackerScreen = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState([]);
  const [showButton, setShowButton] = useState(false);

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
  const [ isEnable, setIsEnable] = useState(true); /*switch button 35-45*/
  const [text, setText] = useState('Client/Personal Trainer');

  const toggleSwitch = () =>{
    if (isEnable) {
      setText('Client')
    } else{
      setText('Personal Trainer')
    }
    setIsEnable(previousState => !previousState);
    setShowButton(previousState => !previousState);
  }
  {showButton && <Button title="Add" style={styles.addButton} onPress={() => console.log("Add button pressed")}/>}


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weekly Workout Plan</Text>
      <Text style ={ styles.SwitchButtonText}>{text}</Text>
      <View style ={styles.switchContainer}>
      <Switch
      trackColor={{false:'red', true:'green'}}
      ios_backgroundColor={'blue'}
      onValueChange={toggleSwitch}
      value={isEnable}/>
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