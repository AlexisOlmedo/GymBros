import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealPlanPTScreen from './MealPlanPTScreen';
import WorkoutTrackerPTScreen from './WorkoutTrackerPTScreen';
import ProfilePTScreen from './ProfilePTScreen';

const Tab = createBottomTabNavigator();

const ClientPTScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meal" component={MealPlanPTScreen} />
      <Tab.Screen name="Workout Tracker" component={WorkoutTrackerPTScreen} />
      <Tab.Screen name="Content" component={ProfilePTScreen} />
    </Tab.Navigator>
  );
};

export default ClientPTScreen;
