import * as React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notification from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';

import Card from '../components/Card';
import MyButton from '../components/MyButton';

export default function Home() {
  const navigator = useNavigation();
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    checkFistLaunch();
  }, []);

  async function handleNotification() {
    const trigger = new Date(date).getTime() + 24 * 60 * 60 * 1000;
    try {
      const id = await Notification.scheduleNotificationAsync({
        content: {
          title: 'Code With Beto!',
          body: 'This is a test notification',
        },
        // trigger,
        trigger: {
          seconds: 5,
          repeats: false,
        },
      });
      alert(`Notification shcedualed!, ${id}`);
    } catch (err) {
      alert('The notification failed to schedule, make sure the hour is valid');
    }
  }

  async function cancelNotification(notifId) {
    await Notification.cancelScheduledNotificationAsync(notifId);
  }

  async function checkFistLaunch() {
    const firstLaunch = await AsyncStorage.getItem('@firstLaunch');
    if (firstLaunch) {
      return;
    } else {
      await AsyncStorage.setItem('@firstLaunch', 'true');
      navigator.navigate('Onboarding');
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      <DateTimePicker
        value={date}
        style={{ width: '25%' }}
        mode={'time'}
        onChange={(event, selectedDate) => setDate(selectedDate)}
      />
      <MyButton title={'Schedule Notification'} onPress={handleNotification} />
      <Card />
    </View>
  );
}
