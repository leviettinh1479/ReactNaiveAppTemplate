import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, SPACING} from '../theme/theme';

const CategoryHeader = (props: any) => {
  return <Text style={styles.text}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_20,
    color: COLORS.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28,
  },
});

export default CategoryHeader;
