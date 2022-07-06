import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import Contacts from '../screens/Contacts';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

export default function MyTopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
}
