import { View } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../components/Card';

export default function Home() {
  return (
    <View style={globalStyles.screenContainer}>
      <Card />
    </View>
  );
}
