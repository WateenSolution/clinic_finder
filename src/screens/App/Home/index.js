import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  Text,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ClinicCard, MyStatusBar} from '../../../components';
import {colors, commonstyles} from '../../../utilities';
import styles from './styles';
import {CameraScreen, CameraType} from 'react-native-camera-kit';

const Home = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Redux State
  const mapRef = useRef(null);
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
          //To Check, If Permission is granted
        } else {
          Alert.alert('Error', 'Location Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      return true;
    }
  };

  // Get Current Location
  const getCurrentLocation = async dispatch => {
    const result = await requestLocationPermission();
    if (result) {
      try {
        Geolocation.getCurrentPosition(
          info => {
            setCurrentLocation(info.coords);
          },
          error => {
            Alert.alert('Error', error?.message, [
              {
                text: 'OK',
                onPress: () => {
                  Linking.openSettings();
                },
              },
            ]);
          },
          {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000},
        );
      } catch (error) {
        console.log('Get Location', error);
      }
    }
  };
  return (
    <View style={commonstyles.main}>
      <MyStatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View>
        <View style={styles.headerCon}>
          <Text style={styles.headerText}>Clinic Finder</Text>
        </View>
        <CameraScreen
          cameraType={CameraType.Back} // front/back(default)
          // Barcode props
          scanBarcode={true}
          onReadCode={event => {
            console.log(event.nativeEvent.codeStringValue);
          }} // optional
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor="red" // (default red) optional, color of laser in scanner frame
          frameColor="white" // (default white) optional, color of border of scanner frame
        />
        {/* <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={[styles.map]}
          initialRegion={{
            latitude: currentLocation?.latitude || 0,
            longitude: currentLocation?.longitude || 0,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
          }}
          showsUserLocation={true}
          loadingIndicatorColor={colors.white}
          showsMyLocationButton={true}
          moveOnMarkerPress={true}
          mapPadding={{
            bottom: 30,
          }}>
          <Marker
            onPress={() => {
              setShowModal(true);
            }}
            coordinate={{
              latitude: currentLocation?.latitude || 0,
              longitude: currentLocation?.longitude || 0,
            }}
          />
        </MapView>
        <ClinicCard
          show={showModal}
          onPressHide={() => {
            setShowModal(false);
          }}
        /> */}
      </View>
    </View>
  );
};

export default Home;
