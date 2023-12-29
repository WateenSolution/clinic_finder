import {StyleSheet} from 'react-native';
import {colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'relative',
    height: '100%',
    backgroundColor: colors.g2,
  },
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  headerCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 20,
    width: '100%',
  },
  headerText: {
    fontSize: 18,
    color: colors.b1,
    fontWeight: '700',
  },
});

export default styles;
