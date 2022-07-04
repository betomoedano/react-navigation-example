import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
// import MyStack from './MyStack';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
  return (
    <MyTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        headerTitleAlign: 'center',
      }}
    >
      <MyTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />
      {/* we need to change the name */}
      {/* <MyTab.Screen
        name="HomeStack"
        component={MyStack}
        options={{ headerShown: false }}
      /> */}
      <MyTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: 'tomato', color: Colors.ligth },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </MyTab.Navigator>
  );
}
