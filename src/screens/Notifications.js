import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';

function reducer(state, { type, title, body, to }) {
  switch (type) {
    case 'SET_TITLE': {
      return { ...state, title };
    }
    case 'SET_BODY': {
      return { ...state, body };
    }
    default:
  }
}

export default function Notifications() {
  const [state, dispatch] = React.useReducer(reducer, {
    to: '',
    sound: 'default',
    title: '',
    body: '',
    data: {},
  });

  async function sendPushNotification() {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
  }

  async function sendMultiplePushNotifications() {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        host: 'exp.host',
        accept: 'application/json',
        'accept-encoding': 'gzip, deflate',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: ['', ''],
        title: 'Nuevo Curso!',
        body: 'Aprovecha el descuento!',
      }),
    });
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Notifications</Text>
      <MyInput
        label={'Title'}
        onChangeText={text => dispatch({ type: 'SET_TITLE', title: text })}
      />
      <MyInput
        label={'Body'}
        onChangeText={text => dispatch({ type: 'SET_BODY', body: text })}
      />
      <MyButton title={'Send'} onPress={sendMultiplePushNotifications} />
    </View>
  );
}
