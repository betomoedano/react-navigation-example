import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
