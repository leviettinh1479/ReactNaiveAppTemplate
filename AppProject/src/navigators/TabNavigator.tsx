import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {COLORS, FONT_SIZE, FONT_FAMILY, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={[styles.activeTabBackground,focused ? {backgroundColor: COLORS.Orange} : {},]}>
                <CustomIcon
                  color={COLORS.White}
                  size={FONT_SIZE.size_30}
                  name="video"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={[styles.activeTabBackground,focused ? {backgroundColor: COLORS.Orange} : {},]}>
                <CustomIcon
                  color={COLORS.White}
                  size={FONT_SIZE.size_30}
                  name="search"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={[styles.activeTabBackground,focused ? {backgroundColor: COLORS.Orange} : {},]}>
                <CustomIcon
                  color={COLORS.White}
                  size={FONT_SIZE.size_30}
                  name="ticket"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={[styles.activeTabBackground,focused ? {backgroundColor: COLORS.Orange} : {},]}>
                <CustomIcon
                  color={COLORS.White}
                  size={FONT_SIZE.size_30}
                  name="user"
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
