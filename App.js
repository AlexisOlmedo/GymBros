import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from './src/Screens/LoginScreen';
//import MainScreen from './src/Screens/MainScreen';
import MealScreen from './src/Screens/MealScreen';
import PTScreen from './src/Screens/PTScreen';
import WeightScreen from './src/Screens/WeightScreen';
import WorkoutTrackerScreen from './src/Screens/WorkoutTrackerScreen';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screenOptions={

}


export default function App() {
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
        <View style ={{alignItems: "center", justifyContent: "center"}}></View> 

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
        <View style ={{alignItems: "center", justifyContent: "center"}}></View> 

      )
    }
    }}/>
    </Tab.Navigator>
    
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Input:{
    width:'100%',
    height: 40,
    borderColor: 'balck',
    borderWidth: 1,
    marginBottom:16,
    padding:8, 
  },
  LoginButton:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius : 5,

  },
  ButtonText:{
     color:'white',
     fontSize: 16,
     textAlign: "center"
  },
  
}); 
 
