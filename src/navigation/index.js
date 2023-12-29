import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import Splash from '../screens/Splash';
import AuthStack from './Stacks/AuthStack';
import HomeStack from './Stacks/HomeStack';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name={'App'} component={HomeStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainAppNav;
