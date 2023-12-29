import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {appFonts, appIcons, colors, size} from '../../utilities';

export const ModalHeader = ({onPressHide, title, fontSize = size.h5}) => {
  return (
    <View style={styles.firstCon}>
      <View />
      <Text style={[styles.header, {fontSize: fontSize}]}>{title || ''}</Text>
      <TouchableOpacity onPress={onPressHide}>
        <Image source={appIcons.cancel} style={styles.icon24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  firstCon: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  header: {
    fontSize: size.h5,
    color: colors.b7,
    textAlign: 'center',
    width: '80%',
    lineHeight: 26,
  },
  icon24: {
    height: 24,
    width: 24,
  },
});
