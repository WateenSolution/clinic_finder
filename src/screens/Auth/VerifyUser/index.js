import React from 'react';
import {Text, View} from 'react-native';
import {CameraScreen, CameraType} from 'react-native-camera-kit';
import {colors, commonstyles} from '../../../utilities';
import styles from './styles';
import {MyStatusBar} from '../../../components';

const VerifyUser = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <MyStatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View>
        <View style={styles.headerCon}>
          <Text style={styles.headerText}>Verification</Text>
        </View>
        <CameraScreen
          cameraType={CameraType.Back} // front/back(default)
          // Barcode props
          scanBarcode={true}
          onReadCode={event => {
            navigation?.navigate('App');
          }} // optional
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor="red" // (default red) optional, color of laser in scanner frame
          frameColor="white" // (default white) optional, color of border of scanner frame
        />
      </View>
    </View>
  );
};

export default VerifyUser;
