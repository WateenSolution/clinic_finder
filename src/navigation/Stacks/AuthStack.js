import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp';
import VerifyUser from '../../screens/Auth/VerifyUser';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyUser" component={VerifyUser} />
    </Stack.Navigator>
  );
}

export default AuthStack;
