import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import AddTrip from '../screens/addTrip';
import TripExpensesScreen from '../screens/tripExpensesScreen';
import AddExpensesScreen from '../screens/addExpensesScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import SignInScreen from '../screens/signInScreen';
import SignUpScreen from '../screens/signUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{headerShown: false, presentation: 'modal'}}
          name="signIn"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{headerShown: false, presentation: 'modal'}}
          name="signUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="addTrip"
          component={AddTrip}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="tripExpensesScreen"
          component={TripExpensesScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddExpensesScreen"
          component={AddExpensesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
