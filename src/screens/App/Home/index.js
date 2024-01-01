import Geolocation from '@react-native-community/geolocation';
import {useIsFocused} from '@react-navigation/native';
import {getPreciseDistance} from 'geolib';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  Text,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ClinicCard, HospitalCard, MyStatusBar} from '../../../components';
import {colors, commonstyles} from '../../../utilities';
import styles from './styles';

const Home = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [selected, setSelected] = useState(null);
  const isFocus = useIsFocused(null);
  // Redux State
  const mapRef = useRef(null);

  useEffect(() => {
    if (isFocus) {
      getCurrentLocation();
    }
  }, [isFocus]);

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
            getHospitals(info?.coords);
            setCurrentLocation(info.coords);
            mapRef?.current?.animateToRegion(info?.coords, 2000);
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

  const getHospitals = async info => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${info?.latitude},${info?.longitude}&radius=10000&type=hospital&keyword=hospital&name=hospital&key=AIzaSyADmYFvUDRaZ41fLRiCGhMPOcbNgNMHsHc`,
    );
    const res = await response.json();
    if (res) {
      setHospitals(res?.results);
    }
  };
  // Distance
  function calculateDistance(lat1, lon1, lat2, lon2) {
    var distance = getPreciseDistance(
      {latitude: lat1, longitude: lon1},
      {latitude: lat2, longitude: lon2},
    );
    return distance / 1000;
  }

  const onPressMarker = item => {
    item.distance = calculateDistance(
      currentLocation?.latitude,
      currentLocation?.longitude,
      item?.geometry?.location?.lat,
      item?.geometry?.location?.lng,
    );
    if (item?.distance) {
      setSelected(item);
      setShowModal(true);
    }
  };
  return (
    <View style={commonstyles.main}>
      <MyStatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View>
        <View style={styles.headerCon}>
          <Text style={styles.headerText}>Clinic Finder</Text>
        </View>
        {currentLocation && (
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
            {hospitals?.map(item => {
              return (
                <HospitalCard
                  coordinate={{
                    latitude: item?.geometry?.location?.lat || 0,
                    longitude: item?.geometry?.location?.lng || 0,
                  }}
                  item={item}
                  onPressMarker={() => {
                    onPressMarker(item);
                  }}
                />
              );
            })}
          </MapView>
        )}
        <ClinicCard
          show={showModal}
          onPressHide={() => {
            setShowModal(false);
          }}
          item={selected}
        />
      </View>
    </View>
  );
};

export default Home;
