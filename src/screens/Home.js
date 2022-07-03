import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
}
