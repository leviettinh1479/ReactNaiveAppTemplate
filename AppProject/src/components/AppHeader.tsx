import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../theme/theme';

const AppHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={() => props.action()}>
        <CustomIcon name={props.name} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.header}</Text>
      <View style={styles.emptyContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONT_SIZE.size_24,
  },
  headerText: {
    flex: 1,
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_20,
    textAlign: 'center',
    color: COLORS.White,
  },
  emptyContainer: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
  },
  iconBG: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.radius_20,
    backgroundColor: COLORS.Orange,
  },
});

export default AppHeader;
