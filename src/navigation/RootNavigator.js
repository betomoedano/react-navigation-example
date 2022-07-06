import { NavigationContainer } from '@react-navigation/native';
import MyBottomTab from './MyBottomTab';
import MyDrawer from './MyDrawer';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
      {/* <MyStack /> */}
      {/* <MyBottomTab /> */}
    </NavigationContainer>
  );
}
