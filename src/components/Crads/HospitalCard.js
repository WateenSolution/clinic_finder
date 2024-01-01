import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Marker} from 'react-native-maps';
import {colors} from '../../utilities';

export const HospitalCard = ({coordinate, item, index, onPressMarker}) => {
  return (
    <Marker
      zIndex={1}
      key={index}
      coordinate={coordinate}
      onPress={onPressMarker}
      tracksViewChanges>
      <View style={styles.container}>
        <Image
          source={{
            uri: item?.icon,
          }}
          style={styles.image}
        />
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.p1,
    borderWidth: 3,
    borderRadius: 30,
    height: 30,
    width: 30,
    zIndex: 99999,
    backgroundColor: colors.white,
    padding: 3,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    backgroundColor: colors.white,
    zIndex: 99999,
    resizeMode: 'contain',
  },
});
