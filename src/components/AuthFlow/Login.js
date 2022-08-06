import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import MyButton from '../MyButton';
import MyInput from '../MyInput';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../../features/auth/auth';
import { signIn } from '../../features/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleSignInButton from './GoogleSignIn';

export default function Login({ onLogin, setEmail, setPassword }) {
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
      <MyInput onChangeText={setEmail} label="Email" />
      <MyInput label="Password" secureTextEntry onChangeText={setPassword} />
      <MyButton title="Login" onPress={onLogin} />
      <Button
        title="Sign Up"
        onPress={() => dispatch(setAuthState('signUp'))}
      />
      <GoogleSignInButton />
    </View>
  );
}
