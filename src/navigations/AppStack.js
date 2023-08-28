import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoomsPage from '../pages/RoomsPage/RoomsPage';
import CodeChatPage from '../pages/CodeChatPage/CodeChatPage';
import { colors } from '../styles/colors';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          title: 'Odalar',
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.white
          }
        }}
        name="Rooms"
        component={RoomsPage}
      />
      <Stack.Screen  name="ChatCode" component={CodeChatPage} />
    </Stack.Navigator>
  );
}
