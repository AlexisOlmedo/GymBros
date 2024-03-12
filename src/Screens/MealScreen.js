import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, FlatList, StyleSheet, Switch } from 'react-native';

const MealScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMealCategory, setSelectedMealCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const mealData = {
    '2024-02-05': {
      breakfast: { name: 'Oatmeal', ingredients: ['Oats', 'Milk', 'Banana'], portion: '1 bowl', comments: 'Healthy start' },
      lunch: { name: 'Grilled Chicken Salad', ingredients: ['Chicken', 'Lettuce', 'Tomato'], portion: '1 plate', comments: 'Low calorie' },
      dinner: { name: 'Vegetable Stir-Fry', ingredients: ['Broccoli', 'Carrots', 'Bell Peppers'], portion: '1 serving', comments: 'Vegan option' },
    },
    
    // Add more date-wise meal data as needed
  };

  const handleDatePress = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleMealCategoryPress = (mealCategory) => {
    setSelectedMealCategory(mealCategory);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setSelectedMealCategory(null);
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

  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Meal Planner</Text>
      <Text style ={ styles.SwitchButtonText}>{text}</Text>
      <Switch
      trackColor={{false:'red', true:'green'}}
      ios_backgroundColor={'blue'}
      onValueChange={toggleSwitch}
      value={isEnable}/>
      
      <FlatList /*WeekName list*/
        data={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']} 
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dateButton} onPress={() => handleDatePress(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
          
        )}
      />
      
      {showButton && <Button title="Add" style={styles.addButton} onPress={() => console.log("Add button pressed")}/>} 

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>{selectedDate} Meals</Text>

          {selectedMealCategory ? (
            <View>
              <Text style={styles.mealCategoryHeading}>{selectedMealCategory}</Text>
              <Text>Name: {mealData[selectedDate][selectedMealCategory].name}</Text>
              <Text>Ingredients: {mealData[selectedDate][selectedMealCategory].ingredients.join(', ')}</Text>
              <Text>Portion: {mealData[selectedDate][selectedMealCategory].portion}</Text>
              <Text>Comments: {mealData[selectedDate][selectedMealCategory].comments}</Text>
            </View>
          ) : (
            <FlatList
              data={['BREAKFAST', 'LUNCH', 'DINNER']}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.mealCategoryButton} onPress={() => handleMealCategoryPress(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          <Button title="Close" style ={styles.closeButton} onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    align: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'right',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  SwitchButtonText:{
    textAlign: 'center',
  },
  dateButton: {
    borderWidth: 2,
    borderColor: 'red',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 5,
    marginHorizontal: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    
  },
  modalHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70,
    
  },
  mealCategoryButton: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 70,
    paddingVertical: 30,
   margin: 50,
    

  },
  mealCategoryHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    
    
  },
  closeButton: {
    borderWidth: 2,
    marginTop: 'auto',
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default MealScreen;