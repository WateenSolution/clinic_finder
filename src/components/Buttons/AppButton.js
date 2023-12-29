import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {appFonts, colors, size} from '../../utilities';

export const AppButtonCon = ({
  onPress,
  title,
  height,
  width,
  bgColor,
  borderRadius,
  borderWidth,
  textColor,
  borderColor,
  textSize,
  icon,
  leftIcon,
  iconColor,
  leftIconColor,
  disable,
  loading,
  left = 5,
  right = 5,
  marginVertical = 10,
  num,
}) => {
  return (
    <>
      {num ? (
        <View style={styles.numStyle}>
          <Text style={styles.numText}>{num}</Text>
        </View>
      ) : null}
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={disable}
        onPress={onPress}
        style={[
          styles.appButton,
          {
            height: height || 56,
            width: width || '100%',
            backgroundColor: bgColor || colors.p1,
            borderRadius: borderRadius || 16,
            borderWidth: borderWidth || 0,
            textColor: textColor || colors.white,
            borderColor: borderColor || 'transparent',
            flexDirection: 'row',
            marginVertical: marginVertical,
          },
        ]}>
        {loading ? (
          <SkypeIndicator size={20} color={colors.white} />
        ) : (
          <>
            {leftIcon && (
              <Image
                source={leftIcon}
                style={[
                  styles.leftIconStyle,
                  {tintColor: leftIconColor || colors.g1, right: right},
                ]}
              />
            )}

            <Text
              style={[
                styles.appButtonText,
                {
                  color: textColor || colors.white,
                  fontSize: textSize || size.xxlarge,
                },
              ]}>
              {title}
            </Text>
            {icon && (
              <Image
                source={icon}
                style={[
                  styles.iconStyle,
                  {tintColor: iconColor || colors.white, left: left},
                ]}
              />
            )}
          </>
        )}
      </TouchableOpacity>
    </>
  );
};
export const AppButton = React.memo(AppButtonCon);
const styles = StyleSheet.create({
  appButtonText: {
    fontSize: size.xxlarge,
    color: colors.white,
    alignSelf: 'center',
    fontFamily: appFonts.AvanttSemiBold,
  },
  appButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  leftIconStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  numStyle: {
    backgroundColor: colors.r1,
    height: 22,
    width: 22,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 99999,
  },

  numText: {
    fontFamily: appFonts.AvanttSemiBold,
    fontSize: size.xsmall,
    color: colors.white,
  },
});
