import React from 'react';
import auth from '@react-native-firebase/auth';
import {colors} from './styles/colors';
import FlashMessage from 'react-native-flash-message';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './navigations/AuthStack';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import CodeChatPage from './pages/CodeChatPage/CodeChatPage';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: true,
                headerBackVisible: false,
                headerTitleAlign: 'center',
                title: 'Odalar',
                headerTintColor: colors.primary,
                headerStyle: {
                  backgroundColor: colors.white,
                },
                headerRight: () => (
                  <MaterialCommunityIcon
                    name="logout"
                    size={25}
                    color={colors.primary}
                    onPress={() => auth().signOut()}
                  />
                ),
              }}
              name="Rooms"
              component={RoomsPage}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTintColor: colors.primary,
              }}
              name="ChatCode"
              component={CodeChatPage}
            />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
