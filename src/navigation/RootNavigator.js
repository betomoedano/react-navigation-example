import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MyBottomTab from './MyBottomTab';
import MyDrawer from './MyDrawer';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      <AuthStack />
      {/* <MyStack /> */}
      {/* <MyBottomTab /> */}
    </NavigationContainer>
  );
}
