import {Formik} from 'formik';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, AuthHeader} from '../../../components';
import {
  appImages,
  commonstyles,
  loginFormFields,
  LoginVS,
} from '../../../utilities';
import styles from './styles';

const Login = ({navigation}) => {
  // Redux State

  return (
    <View style={commonstyles.main}>
      <View style={commonstyles.contentContainer}>
        <AuthHeader />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Formik
            validationSchema={LoginVS}
            initialValues={loginFormFields}
            onSubmit={() => navigation?.replace('App')}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <View>
                <View style={styles.imageContainer}>
                  <Image source={appImages.appTextLogo} />
                </View>
                <AppInput
                  placeholder={'Enter Username'}
                  label={'Username'}
                  name="username"
                  value={values.username}
                  error={errors.username}
                  touched={touched.username}
                  onChangeText={handleChange('username')}
                />
                <AppInput
                  placeholder={'Enter Password'}
                  label={'Password'}
                  name="password"
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  onChangeText={handleChange('password')}
                  secureTextInput={true}
                />

                <View style={styles.rememberMainContainer}></View>
                <AppButton title={'Login'} onPress={handleSubmit} />
                <Text style={styles.reserveText}>
                  2024 wateen.com, inc. All rights reserved.
                </Text>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;
