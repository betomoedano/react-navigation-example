import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
import { auth } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: 'yourCliendId.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      title="Sign In with Google"
      disabled={!request}
      onPress={() => promtAsync()}
    />
  );
}
