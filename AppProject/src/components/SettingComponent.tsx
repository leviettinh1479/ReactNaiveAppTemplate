import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

const SettingComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <View>
        <CustomIcon name={props.icon} style={styles.iconStyle} />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.title}>{props.heading}</Text>
        <Text style={styles.subtitle}>{props.subheading}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <View style={styles.iconBG}>
        <CustomIcon name={'arrow-right'} style={styles.iconStyle} />
      </View>
    </View>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
  settingContainer: {
    flex: 1,
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONT_SIZE.size_24,
    paddingHorizontal: SPACING.space_20,
  },
  iconBG: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.White,
  },
  subtitle: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_14,
    color: COLORS.WhiteRGBA15,
  },
});
