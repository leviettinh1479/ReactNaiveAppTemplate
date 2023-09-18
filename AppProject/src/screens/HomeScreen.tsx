import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {COLORS} from '../theme/theme';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.push('MovieDetails');
        }}>
        <Text>Tinh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black
  },
});
export default HomeScreen;
