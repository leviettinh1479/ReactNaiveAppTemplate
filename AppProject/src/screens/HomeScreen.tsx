import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { COLORS } from '../theme/theme'


export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Black,
  },
})