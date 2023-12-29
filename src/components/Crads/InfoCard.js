import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, size} from '../../utilities';

export const InfoCard = ({}) => {
  const BoxText = ({title, subtitle}) => {
    return (
      <View>
        <View style={styles.cardCon}>
          <Text style={styles.h1}>{title}</Text>
          <Text style={styles.h2}>{subtitle}</Text>
        </View>
        <View
          style={{borderBottomWidth: 1, height: 1, borderColor: colors.b1}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BoxText title={'Hospital Name:'} subtitle={`${'Al Haram Hospital'}`} />
      <BoxText title={'Distance:'} subtitle={`${10} kM`} />
      <BoxText title={'Number of Beds:'} subtitle={`${200} `} />
      <BoxText title={'Number of Doctors:'} subtitle={`20`} />
      <View style={styles.cardCon}>
        <Text style={styles.h1}>{'Address:'}</Text>
      </View>
      <View style={{paddingHorizontal: WP('2')}}>
        <Text style={styles.h2}>{'Opposite Masjid Al Nabwi Madinah'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.p1,
    padding: WP('4'),
    paddingVertical: WP('6'),
  },
  cardCon: {
    padding: WP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: size.xsmall,
    color: colors.black,
    fontWeight: '600',
  },
  h2: {
    fontSize: size.xsmall,
    color: colors.black,
  },
});
