import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Chats() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Chats</Text>
    </View>
  );
}
