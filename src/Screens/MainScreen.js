import React  from 'react';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';


import MealScreen from './MealScreen';
import WorkoutTrackerScreen from './WorkoutTrackerScreen';
import WeightScreen from './WeightScreen';
import PTScreen from './PTScreen';



const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarStyle:{
    backgroundColor: 'white', // Background color of the tab bar
    borderTopWidth: 1, // Border on top of the tab bar
    borderTopColor: 'gray', // Color of the border
    height: 60, // Height of the tab bar

  },
  tabBarActiveTintColor:'blue'
};



const MainScreen = () =>{
  return (
    
    
    <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Meal" component={MealScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
        
          
        </View> 

      )
    }
    }}/>

    <Tab.Screen name="PT" component={PTScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
         
        </View> 

      )
    }
    }}/>


    <Tab.Screen name="Weight" component={WeightScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
          
        </View> 

      )
    }
    }}/>

    <Tab.Screen name="Workout" component={WorkoutTrackerScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
          
        </View> 

      )
    }
    }}/>
    </Tab.Navigator>
    
    
  );
};


export default MainScreen;