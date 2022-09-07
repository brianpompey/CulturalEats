import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import RecipeList from './src/screens/RecipeList';
import RecipeCategories from './src/screens/RecipeCategories';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomePage} />
        <Stack.Screen options={{ headerShown: false }} name="RecipeList" component={RecipeList} />
        <Stack.Screen options={{ headerShown: false }} name="RecipeCategories" component={RecipeCategories} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;