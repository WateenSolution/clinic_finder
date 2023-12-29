import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {colors, commonstyles} from '../../../utilities';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import {MyStatusBar} from '../../../components';

const Home = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState('');
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
      <MyStatusBar />
      <View>
        <MapView
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
          <View style={styles.headerCon}>
            <Text style={styles.headerText}>Clinic Finder</Text>
          </View>
        </MapView>
      </View>
    </View>
  );
};

export default Home;
