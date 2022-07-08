import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../features/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      <Text style={globalStyles.title}>{user.userToken}</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />

      <Button
        title="sign out"
        onPress={async () => {
          await AsyncStorage.removeItem('@token');
          dispatch(signOut());
        }}
      />
    </View>
  );
}
