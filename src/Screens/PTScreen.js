import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Button, Image, StyleSheet } from 'react-native';

const PTScreen = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  

  const trainersData = [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      picture: 'https://example.com/johndoe.jpg',
      distance: '5 miles',
      description: 'Certified personal trainer with 5 years of experience. Specializing in weight loss and muscle gain.',
      benefits: 'Tailored workout plans, nutritional guidance, progress tracking.',
      certificates: ['ACE Certified', 'CPR and AED Certified'],
    },
    {
      id: '2',
      name: 'Alexis Olmedo',
      age: 20,
      picture: 'https://example.com/johndoe.jpg',
      distance: '2 miles',
      description: 'Certified personal trainer with 5 years of experience. Specializing in weight loss and muscle gain.',
      benefits: 'Tailored workout plans, nutritional guidance, progress tracking.',
      certificates: ['ACE Certified', 'CPR and AED Certified'],
    },
    // Add more trainers as needed
  ];

  const handleTrainerPress = (trainer) => {
    setSelectedTrainer(trainer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Trainers</Text>
      <FlatList
        data={trainersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trainerItem} onPress={() => handleTrainerPress(item)}>
            <Image source={{ uri: item.picture }} style={styles.trainerImage} />
            <View style={styles.trainerInfo}>
              <Text>{item.name}</Text>
              <Text>Age: {item.age}</Text>
              <Text>Distance: {item.distance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedTrainer && (
            <View>
              <Image source={{ uri: selectedTrainer.picture }} style={styles.selectedTrainerImage} />
              <Text style={styles.selectedTrainerName}>{selectedTrainer.name}</Text>
              <Text>Description: {selectedTrainer.description}</Text>
              <Text>Benefits: {selectedTrainer.benefits}</Text>
              <Text>Certificates:</Text>
              <FlatList
                data={selectedTrainer.certificates}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text>{item}</Text>}
              />
            </View>
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
    marginBottom: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
  trainerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  trainerInfo: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  selectedTrainerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  selectedTrainerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PTScreen;