import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
// import MyStack from './MyStack';

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
  return (
    <MyTab.Navigator initialRouteName="Home">
      <MyTab.Screen name="Home" component={Home} />
      {/* we need to change the name */}
      {/* <MyTab.Screen
        name="HomeStack"
        component={MyStack}
        options={{ headerShown: false }}
      /> */}
      <MyTab.Screen name="Profile" component={Profile} />
    </MyTab.Navigator>
  );
}
