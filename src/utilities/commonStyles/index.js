import {StyleSheet} from 'react-native';

import {colors, WP, HP, size, appFonts, scrHeight} from '../../utilities';

export const commonstyles = StyleSheet.create({
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  zIndex: {
    zIndex: 99999,
  },
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
  },
  listHeadingText: {
    marginVertical: 15,
    marginHorizontal: 5,
    fontFamily: appFonts.gilroySemiBold,
    fontSize: size.normal,
    color: colors.drakBlack,
    marginTop: HP('5'),
  },
  detailsContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 2,
  },
  relatedText: {
    fontSize: size.large,
    fontFamily: appFonts.gilroySemiBold,
    textAlign: 'center',
    marginVertical: 20,
    color: colors.black,
  },
  removeHorizontalMargin: {
    marginHorizontal: -10,
  },
  boldText: {
    fontFamily: appFonts.gilroySemiBold,
    fontSize: size.small,
    color: colors.black,
  },
  normalText: {
    fontFamily: appFonts.gilroyRegular,
    fontSize: size.xsmall,
    color: colors.black,
  },
  h10: {
    height: scrHeight / 10,
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  hitSlop: {
    top: 60,
    bottom: 60,
    left: 60,
    right: 60,
  },
});
