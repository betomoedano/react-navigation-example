import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { View, Text } from 'react-native';
import { Colors } from '../constants/colors';
import MyBottomTab from './MyBottomTab';

const HomeStack = createStackNavigator();

const myConfig = {
  // title: 'Feed',
  headerShown: false,
  headerTitleAlign: 'center',
  presentation: 'modal',
  animationEnabled: true,
  gestureEnabled: true, //Defaults to true on iOS, false on Android.
  animationTypeForReplace: 'push', //The type of animation to use when this screen replaces another screen
  keyboardHandlingEnabled: true, //the keyboard will NOT automatically dismiss when navigating to a new screen from this screen. Defaults to true.
  //custom header
  // header: ({ navigation, route, options, back }) => (
  //   <CustomHeader title={route.name} />
  // ),
  // cardStyle: { backgroundColor: 'red' },
};

function CustomHeader({ title }) {
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        backgroundColor: Colors.secondary,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: Colors.ligth,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default function MyStack() {
  return (
    <HomeStack.Navigator screenOptions={myConfig}>
      <HomeStack.Screen name="Root" component={MyBottomTab} />
      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen
          name="Settings"
          component={Settings}
          options={{ headerBackTitle: 'Home' }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
