import { NavigationContainer } from '@react-navigation/native';
import MyBottomTab from './MyBottomTab';
import MyStack from './MyStack';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <MyBottomTab /> */}
    </NavigationContainer>
  );
}
