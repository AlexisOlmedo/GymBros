import React  from 'react';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
//import MainScreen from './src/Screens/MainScreen';
import MealScreen from './src/Screens/MealScreen';
import PTScreen from './src/Screens/PTScreen';
import WeightScreen from './src/Screens/WeightScreen';
import WorkoutTrackerScreen from './src/Screens/WorkoutTrackerScreen';



const Tab = createBottomTabNavigator();
const screenOptions={

}


const MainScreen = () =>{
  return (
    
    <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Meal" component={MealScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
        <MaterialCommunityIcons name="food-drumstick" size={24} color="black" />
          
        </View> 

      )
    }
    }}/>

    <Tab.Screen name="PT" component={PTScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
          <Image source={require('./assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.webp')} style={{ width: 30, height: 30 }}></Image>
        </View> 

      )
    }
    }}/>


    <Tab.Screen name="Weight" component={WeightScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
          <FontAwesome5 name="weight" size={24} color="black" />
        </View> 

      )
    }
    }}/>

    <Tab.Screen name="Workout" component={WorkoutTrackerScreen} options ={{tabBarIcon: ({focused}) => {
      return(
        <View style ={{alignItems: "center", justifyContent: "center"}}>
          <Image source={require('./assets/3043888.png')} style={{ width: 30, height: 30 }}></Image>
        </View> 

      )
    }
    }}/>
    </Tab.Navigator>
    
    </NavigationContainer>
    
  );
};


export default MainScreen;