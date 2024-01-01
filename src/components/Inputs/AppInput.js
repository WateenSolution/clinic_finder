import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, size} from '../../utilities';

export const AppInput = ({
  title,
  placeholder,
  placeholderTextColor,
  keyboardType,
  onChangeText,
  error,
  onFocus,
  onBlur,
  editable,
  secureTextInput,
  bgColor,
  leftIcon,
  fontSize,
  letterSpacing,
  borderBottomWidth = 1,
  borderWidth = 1,
  rightIcon,
  onPressIn,
  value,
  textColor,
  autoCapitalize = 'none',
  autoComplete = 'off',
  autoCorrect = false,
  additionalStyles = {},
  maxLength = 500,
}) => {
  return (
    <>
      <View style={styles.container}>
        {title && <Text style={styles.titleStyle}>{title || ''}</Text>}
        <TextInput
          value={value}
          style={[
            styles.inputStyle,
            {
              fontSize: fontSize || size.large,
              letterSpacing: letterSpacing,
              color: textColor || colors.b1,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || colors.g7}
          keyboardType={keyboardType}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          editable={editable}
          onPressIn={onPressIn}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          disabled={editable}
          maxLength={maxLength}
          secureTextEntry={secureTextInput}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.g3,
  },
  inputStyle: {
    borderRadius: 16,
    borderColor: colors.g7,
    height: 50,
    paddingHorizontal: 10,
    fontSize: size.large,
    color: colors.b1,
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    marginBottom: 15,
  },
  errorText: {
    fontSize: size.xsmall,
    paddingLeft: 5,
    color: colors.red,
  },
});
