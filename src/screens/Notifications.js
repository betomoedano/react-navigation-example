import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Notifications() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Notifications</Text>
    </View>
  );
}
