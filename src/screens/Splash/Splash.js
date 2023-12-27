import React, {useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {appImages, colors} from '../../utilities';
import styles from './styles';

const Splash = ({navigation}) => {
  const {userInfo} = useSelector(state => state?.auth);
  const dispatch = useDispatch(null);

  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    try {
      // navigation?.replace('Auth');
    } catch (error) {}
  };

  return (
    <SafeAreaView style={[styles.main]}>
      <Image
        source={appImages.appTextLogo}
        style={styles.imageStyles}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Splash;
