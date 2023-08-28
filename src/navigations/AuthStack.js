import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='SignIn' component={SignInPage} />
        <Stack.Screen name='SignUp' component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
