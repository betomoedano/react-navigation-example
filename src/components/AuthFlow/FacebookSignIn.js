import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { Button } from 'react-native';
import { auth } from '../../firebaseConfig';
import { FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { ResponseType } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export default function FacebookSignInButton() {
  const [request, response, promtAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: '', // your client id
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      const credential = FacebookAuthProvider.credential(access_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      title="Sign In with Facebook"
      disabled={!request}
      onPress={() => promtAsync()}
    />
  );
}
