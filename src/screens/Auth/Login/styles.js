import {StyleSheet} from 'react-native';
import {colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginBottom: HP('2'),
  },

  checkboxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rememberMainContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('5'),
  },
  forgotText: {
    color: colors.linkColor,
    marginVertical: 20,

    fontSize: size.tiny,
  },
  reserveText: {
    color: colors.black,
    marginVertical: 20,
    textAlign: 'center',
    fontSize: size.small,
  },
  label: {
    fontSize: size.tiny,
    color: colors.black,
  },
  h1: {
    fontWeight: '700',
    fontSize: size.h5,
    marginTop: 50,
  },
  checkbox: {
    padding: 0,
    margin: 0,
  },
});

export default styles;
