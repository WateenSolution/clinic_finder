import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {appFonts, appIcons, colors, size, spacing, WP} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {useNavigation} from '@react-navigation/core';

export const AuthHeader = ({title, onPressBack, backIcon}) => {
  const navigation = useNavigation();
  return (
    <View>
      <MyStatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      {backIcon && (
        <TouchableOpacity
          onPress={onPressBack ? onPressBack() : () => navigation?.goBack()}
          style={spacing.my4}>
          <Image source={appIcons.arrowLeft} style={styles.leftStyle} />
        </TouchableOpacity>
      )}
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: WP('18'),
    justifyContent: 'center',
  },

  titleStyle: {
    fontFamily: appFonts.AvanttSemiBold,
    fontSize: size.h1,
    color: colors.b1,
    textAlign: 'center',
  },
  leftStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
