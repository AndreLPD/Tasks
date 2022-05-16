import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaView, TouchableOpacity, Flatlist, StyleSheet, Text, View} from 'react-native';
import  Task  from "./src/pages/Task/index";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import database from "./src/config/firebaseconfig.js";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen name="Task" component={Task} options={{headerTintColor:"#f92e6a"}}/>
        <Stack.Screen name="NewTask" component={NewTask} options={{headerTintColor:"#f92e6a"}}/>
        <Stack.Screen name="Details" component={Details} options={{headerTintColor:"#f92e6a"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
