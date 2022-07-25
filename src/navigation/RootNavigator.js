import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MyDrawer from './MyDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { restoreToken } from '../features/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../screens/Splash';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';

export default function Wrapper() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const { userToken, isLoading } = useSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    getValue();
  }, []);

  React.useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      response => {
        console.log('Notification Response Received: ', response);
        const toRoute = response.notification.request.content.data.route;
        const data = response.notification.request.content.data;
        switch (toRoute) {
          case 'Settings': {
            navigation.navigate('Settings', data);
            break;
          }
          case 'notifications': {
            navigation.navigate('notifications', data);
            break;
          }
          default: {
            break;
          }
        }
      }
    );
    return () => subscription.remove();
  }, []);

  async function getValue() {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        console.log('data restored', value);
        dispatch(restoreToken(value));
        return value;
      } else {
        console.log('no data');
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return <Splash />;
  }
  return <>{userToken ? <MyDrawer /> : <AuthStack />}</>;
}
