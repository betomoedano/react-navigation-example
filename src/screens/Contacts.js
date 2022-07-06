import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Contacts() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Contacts</Text>
    </View>
  );
}
