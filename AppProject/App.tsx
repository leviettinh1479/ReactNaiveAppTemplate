import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import TicketScreen from './src/screens/TicketScreen';
import UserAccountScreen from './src/screens/UserAccountScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tab" component={TabNavigator} options={{animation:'default'}} />  
          <Stack.Screen name="MovieDetails" component={MovieDetailScreen}  options={{animation:'slide_from_right'}}/>
          <Stack.Screen name="SeatBooking" component={SeatBookingScreen}  options={{animation:'slide_from_bottom'}}/>               
        </Stack.Navigator>
      </NavigationContainer>
    )
  
}
export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})
