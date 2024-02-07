import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, FlatList, StyleSheet } from 'react-native';

const MealScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMealCategory, setSelectedMealCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const mealData = {
    '2024-02-05': {
      breakfast: { name: 'Oatmeal', ingredients: ['Oats', 'Milk', 'Banana'], portion: '1 bowl', comments: 'Healthy start' },
      lunch: { name: 'Grilled Chicken Salad', ingredients: ['Chicken', 'Lettuce', 'Tomato'], portion: '1 plate', comments: 'Low calorie' },
      dinner: { name: 'Vegetable Stir-Fry', ingredients: ['Broccoli', 'Carrots', 'Bell Peppers'], portion: '1 serving', comments: 'Vegan option' },
    },
    '2024-02-06': {
      // Meal data for another date
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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meal Planner</Text>
      <FlatList
        data={['Monday', '2024-02-06', '2024-02-07']} // Add more dates as needed
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dateButton} onPress={() => handleDatePress(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

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
              data={['breakfast', 'lunch', 'dinner']} // Add more meal categories as needed
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.mealCategoryButton} onPress={() => handleMealCategoryPress(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          <Button title="Close" onPress={handleCloseModal} />
        </View>
      </Modal>
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
  dateButton: {
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
  mealCategoryButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
  mealCategoryHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default MealScreen;