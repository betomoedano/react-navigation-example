import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthState } from '../features/auth/auth';
import Login from '../components/AuthFlow/Login';
import SignUp from '../components/AuthFlow/SignUp';
import { auth } from '../firebaseConfig';
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Alert } from 'react-native';
import { validateEmail, validatePassword } from '../utils/validation';

export default function Auth() {
  const dispatch = useDispatch();
  const { authState } = useSelector(state => state.auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log(authState);

  const onLogin = () => {
    const errorEmail = validateEmail(email);
    const errorPassword = validatePassword(password);
    if (errorEmail || errorPassword) {
      Alert.alert(errorEmail, errorPassword);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log('login success', user);
          alert('signed in success');
          dispatch(setAuthState('signedIn'));
        })
        .catch(err => Alert.alert('Login error', err.message));
    }
  };

  const onSignUp = () => {
    const errorEmail = validateEmail(email);
    const errorPassword = validatePassword(password);
    if (errorEmail || errorPassword) {
      Alert.alert(errorEmail, errorPassword);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log('Signup success', user);
          alert('Signup success');
          dispatch(setAuthState('signedIn'));
        })
        .catch(err => Alert.alert('Signup error', err.message));
    }
  };

  const onSignOut = () => {
    signOut(auth).catch(err => console.log(err));
  };
  return (
    <>
      {authState === 'signIn' && (
        <Login
          onLogin={onLogin}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
      {authState === 'signUp' && (
        <SignUp
          onSignUp={onSignUp}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
    </>
  );
}
