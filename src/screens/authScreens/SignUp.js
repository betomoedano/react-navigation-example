import { Text, View } from 'react-native';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import { globalStyles } from '../../styles/global';

export default function SignUp({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Sign Up</Text>
      <MyInput label="Email" />
      <MyInput label="Password" secureTextEntry />
      <MyButton title="Sign Up" />
      <MyButton title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
