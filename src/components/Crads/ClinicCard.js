import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Modal from 'react-native-modal';
import {appFonts, appImages, colors, size, spacing} from '../../utilities';
import {ModalHeader} from '../Headers/ModalHeader';
import {InfoCard} from './InfoCard';
export const ClinicCard = ({show = false, onPressHide, paymentInfo}) => {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <ModalHeader title={'Info'} onPressHide={onPressHide} />
          <View style={spacing.my4}>
            <InfoCard />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    width: '100%',
    resizeMode: 'contain',
  },
  modalContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
  },
  cardCon: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  leftCon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.g5,
    padding: 5,
  },
  rightCon: {
    padding: 5,
  },

  titleStyle: {
    fontSize: size.normal,
  },
  desc: {
    fontSize: size.large,
    color: colors.b1,
    marginVertical: 15,
    textAlign: 'center',
    lineHeight: 21,
  },
});
