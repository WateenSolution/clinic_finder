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
  signupFormFields,
  SignUpVS,
} from '../../../utilities';
import styles from './styles';

const SignUp = ({navigation}) => {
  // Redux State

  return (
    <View style={commonstyles.main}>
      <View style={commonstyles.contentContainer}>
        <AuthHeader />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Formik
            validationSchema={SignUpVS}
            initialValues={signupFormFields}
            onSubmit={() => navigation?.replace('VerifyUser')}>
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
                  <Text style={styles.h1}>Create your account</Text>
                </View>
                <AppInput
                  placeholder={'First name'}
                  label={'First Name'}
                  name="firstname"
                  value={values.firstName}
                  error={errors.firstName}
                  touched={touched.firstName}
                  onChangeText={handleChange('firstName')}
                />
                <AppInput
                  placeholder={'Last name'}
                  label={'Last Name'}
                  name="lastname"
                  value={values.lastName}
                  error={errors.lastName}
                  touched={touched.lastName}
                  onChangeText={handleChange('lastName')}
                />
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
                  placeholder={'Passport number'}
                  label={'Passport Number'}
                  name="passport_no"
                  value={values.passport_no}
                  error={errors.passport_no}
                  touched={touched.passport_no}
                  onChangeText={handleChange('passport_no')}
                />
                <AppInput
                  placeholder={'Visa number'}
                  label={'Visa Number'}
                  name="visa_no"
                  value={values.visa_no}
                  error={errors.visa_no}
                  touched={touched.visa_no}
                  onChangeText={handleChange('visa_no')}
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
                <AppButton title={'SignUp'} onPress={handleSubmit} />
                <Text
                  onPress={() => {
                    navigation?.navigate('Login');
                  }}
                  style={styles.reserveText}>
                  Already have an account?
                  <Text style={[styles.reserveText, {fontWeight: 'bold'}]}>
                    {' '}
                    Login
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

export default SignUp;
