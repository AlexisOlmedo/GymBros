import React  from'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNaviagtor();

const MainScreen = () => {
    return(
        <NaviagtorContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
                <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
                <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
            </Stack.Navigator>
        </NaviagtorContainer>

    );
};