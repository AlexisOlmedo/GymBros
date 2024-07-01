import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, FlatList, StyleSheet, Switch, TextInput } from 'react-native';

const MealScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMealCategory, setSelectedMealCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isEnable, setIsEnable] = useState(true);
  const [text, setText] = useState('Client/Personal Trainer');
  const [mealPlan, setMealPlan] = useState({
    Monday: { breakfast: '', lunch: '', dinner: '' },
    Tuesday: { breakfast: '', lunch: '', dinner: '' },
    Wednesday: { breakfast: '', lunch: '', dinner: '' },
    Thursday: { breakfast: '', lunch: '', dinner: '' },
    Friday: { breakfast: '', lunch: '', dinner: '' },
    Saturday: { breakfast: '', lunch: '', dinner: '' },
    Sunday: { breakfast: '', lunch: '', dinner: '' },
  });

  const mealData = {
    'Monday': {
      breakfast: { name: 'Oatmeal', ingredients: ['Oats', 'Milk', 'Banana'], portion: '1 bowl', comments: 'Healthy start' },
      lunch: { name: 'Grilled Chicken Salad', ingredients: ['Chicken', 'Lettuce', 'Tomato'], portion: '1 plate', comments: 'Low calorie' },
      dinner: { name: 'Vegetable Stir-Fry', ingredients: ['Broccoli', 'Carrots', 'Bell Peppers'], portion: '1 serving', comments: 'Vegan option' },
    },
    // Other days...
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

  const toggleSwitch = () => {
    if (isEnable) {
      setText('Client');
    } else {
      setText('Personal Trainer');
    }
    setIsEnable(previousState => !previousState);
    setShowButton(previousState => !previousState);
  };

  const handleMealChange = (mealCategory, text) => {
    setMealPlan({
      ...mealPlan,
      [selectedDate]: {
        ...mealPlan[selectedDate],
        [mealCategory.toLowerCase()]: text,
      },
    });
  };

  const renderMealPlanForm = () => (
    <View>
      <Text style={styles.modalHeading}>{selectedDate} Meals</Text>
      {['breakfast', 'lunch', 'dinner'].map((mealCategory) => (
        <View key={mealCategory} style={styles.inputContainer}>
          <Text style={styles.mealCategoryHeading}>{mealCategory.charAt(0).toUpperCase() + mealCategory.slice(1)}</Text>
          <TextInput
            style={styles.input}
            placeholder={`Meal for ${mealCategory}`}
            value={mealPlan[selectedDate] ? mealPlan[selectedDate][mealCategory] : ''}
            onChangeText={(text) => handleMealChange(mealCategory, text)}
          />
        </View>
      ))}
      <Button title="Save" onPress={handleCloseModal} />
    </View>
  );

  const renderPTMealPlan = () => (
    <View>
      <Text style={styles.modalHeading}>{selectedDate} Meals</Text>
      {selectedMealCategory && selectedDate && mealData[selectedDate]?.[selectedMealCategory.toLowerCase()] && (
        <View>
          <Text style={styles.mealCategoryHeading}>{selectedMealCategory}</Text>
          <Text>Name: {mealData[selectedDate][selectedMealCategory.toLowerCase()].name}</Text>
          <Text>Ingredients: {mealData[selectedDate][selectedMealCategory.toLowerCase()].ingredients.join(', ')}</Text>
          <Text>Portion: {mealData[selectedDate][selectedMealCategory.toLowerCase()].portion}</Text>
          <Text>Comments: {mealData[selectedDate][selectedMealCategory.toLowerCase()].comments}</Text>
        </View>
      )}
      <Button title="Close" onPress={handleCloseModal} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meal Planner</Text>
      <Text style={styles.SwitchButtonText}>{text}</Text>
      <Switch
        trackColor={{ false: 'red', true: 'green' }}
        ios_backgroundColor={'blue'}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
      <FlatList
        data={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dateButton} onPress={() => handleDatePress(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      {showButton && <Button title="Add" style={styles.addButton} onPress={() => console.log("Add button pressed")} />}
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          {isEnable ? renderMealPlanForm() : renderPTMealPlan()}
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
  SwitchButtonText: {
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
  mealCategoryHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 3,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  addButton: {
    marginVertical: 20,
  },
  closeButton: {
    borderWidth: 2,
    marginTop: 'auto',
    marginBottom: 20,
    alignSelf: 'center',
  },
});


export default MealScreen;