import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/authScreens/Login';
import SignUp from '../screens/authScreens/SignUp';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}
