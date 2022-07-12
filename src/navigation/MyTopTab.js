import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../constants/colors';
import Chats from '../screens/Chats';
import Contacts from '../screens/Contacts';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

export default function MyTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
}
