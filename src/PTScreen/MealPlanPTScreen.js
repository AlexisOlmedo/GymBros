import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';

const MealPlanPTScreen = () => {
  const [clients, setClients] = useState([
    { id: '1', name: 'Client 1', mealPlan: {} },
    { id: '2', name: 'Client 2', mealPlan: {} },
    { id: '3', name: 'Client 3', mealPlan: {} },
  ]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [mealPlan, setMealPlan] = useState({});
  const [editable, setEditable] = useState(true);

  const handleAddClient = () => {
    const newClient = {
      id: Math.random().toString(),
      name: `Client ${clients.length + 1}`,
      mealPlan: {},
    };
    setClients([...clients, newClient]);
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client);
    setMealPlan(client.mealPlan || {});
  };

  const handleSaveMealPlan = () => {
    const updatedClients = clients.map((client) =>
      client.id === selectedClient.id ? { ...client, mealPlan: mealPlan } : client
    );
    setClients(updatedClients);
    setSelectedClient(null);
    setMealPlan({});
  };

  const handleChangeMealPlan = () => {
    setEditable(true);
  };

  const handleMealChange = (day, field, value) => {
    setMealPlan({
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
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
        ListHeaderComponent={
          <Button title="Add Client" onPress={handleAddClient} />
        }
        ListFooterComponent={
          selectedClient && (
            <View style={styles.mealPlanContainer}>
              <Text style={styles.heading}>Meal Plan for {selectedClient.name}</Text>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <View key={day} style={styles.dayContainer}>
                  <Text style={styles.dayLabel}>{day}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Meal Title"
                    value={mealPlan[day]?.title || ''}
                    editable={editable}
                    onChangeText={(text) => handleMealChange(day, 'title', text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Ingredients"
                    value={mealPlan[day]?.ingredients || ''}
                    editable={editable}
                    onChangeText={(text) => handleMealChange(day, 'ingredients', text)}
                  />
                </View>
              ))}
              <Button title="Save Meal Plan" onPress={handleSaveMealPlan} />
              {!editable && <Button title="Change Meal Plan" onPress={handleChangeMealPlan} />}
            </View>
          )
        }
      />
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
  mealPlanContainer: {
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

export default MealPlanPTScreen;