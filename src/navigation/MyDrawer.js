import { createDrawerNavigator } from '@react-navigation/drawer';
import Notifications from '../screens/Notifications';
import MyStack from './MyStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Stack"
        component={MyStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
