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
                  <Text style={styles.h1}>Login with your account</Text>
                </View>
                <AppInput
                  placeholder={'Email address'}
                  label={'Email'}
                  name="email"
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChangeText={handleChange('email')}
                />
                <AppInput
                  placeholder={'Password'}
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
                <Text
                  onPress={() => {
                    navigation?.navigate('SignUp');
                  }}
                  style={styles.reserveText}>
                  Don't have account?
                  <Text style={[styles.reserveText, {fontWeight: 'bold'}]}>
                    {' '}
                    SignUp
                  </Text>
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
