import * as React from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { auth } from '../../firebaseConfig';
import { signInWithCredential, OAuthProvider } from 'firebase/auth';

export default function AppleLoginButton() {
  const [isAppleLoginAvailable, setIsAppleLoginAvailable] =
    React.useState(false);

  React.useEffect(() => {
    AppleAuthentication.isAvailableAsync().then(setIsAppleLoginAvailable);
  }, []);

  const handleSignInWithApple = async () => {
    const nonce = Math.random().toString(36).substring(2, 10);

    try {
      const hashedNonce = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        nonce
      );
      const appleAuthCredential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        nonce: hashedNonce,
      });
      const { identityToken } = appleAuthCredential;
      const provider = new OAuthProvider('apple.com');
      const credential = provider.credential({
        idToken: identityToken,
        rawNonce: nonce,
      });
      console.log('credential', credential);
      return await signInWithCredential(auth, credential);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 44 }}
      onPress={handleSignInWithApple}
    />
  );
}
