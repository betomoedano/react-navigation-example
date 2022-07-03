import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Profile() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Profile</Text>
    </View>
  );
}
