import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/Auth';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'pop',
      }}
    >
      <Auth.Screen name="Auth" component={AuthScreen} />
    </Auth.Navigator>
  );
}
