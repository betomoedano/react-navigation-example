import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
// import MyStack from './MyStack';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
  const navigation = useNavigation();
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
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="align-left"
                size={25}
                color={Colors.secondary}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
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
