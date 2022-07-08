import { useState } from 'react';
import { Text, View } from 'react-native';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  async function save(value) {
    try {
      await AsyncStorage.setItem('@token', value);
      dispatch(signIn(value));
      console.log('data saved');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <MyInput onChangeText={setToken} value={token} label="Email" />
      <MyInput label="Password" secureTextEntry />
      <MyButton title="Login" onPress={() => save(token)} />
      <MyButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}
