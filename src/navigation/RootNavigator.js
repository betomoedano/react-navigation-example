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
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { setTodos, setUser } from '../features/user/user';
import { db } from '../firebaseConfig';
import { collection, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';

export default function Wrapper() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const { userToken } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async user => {
      if (user) {
        const userToSave = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          createdAt: user.metadata.creationTime,
        };
        getUserFromDatabase(userToSave);
        const todos = await getTodosFromDatabase(user.uid);
        dispatch(setTodos(todos));
        dispatch(setUser(userToSave));
        dispatch(restoreToken(user.email));
      } else {
        console.log('user is not authenticated');
      }
      setIsLoading(false);
    });
    return unsubscribeAuth;
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

  function saveUserToDatabase(user) {
    const userRef = collection(db, 'users');
    addDoc(userRef, user);
    console.log('user saved to database');
  }

  async function getUserFromDatabase(user) {
    const userRef = doc(db, 'users', user.id);
    if (userRef) {
      return;
    }
    await setDoc(userRef, user);
    console.log('User already in database');
  }

  async function getTodosFromDatabase(userId) {
    const userRef = await getDoc(doc(db, 'users', userId));
    if (userRef.data().todos) {
      return userRef.data().todos;
    } else {
      return [];
    }
  }

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
