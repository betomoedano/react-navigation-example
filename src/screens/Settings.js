import { Image, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useRoute } from '@react-navigation/native';

export default function Settings() {
  const route = useRoute();
  const { author, description, id, pic, title } = route.params
    ? route.params.posts
    : {};

  if (!route.params) return <Text style={globalStyles.title}>Settings</Text>;
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text>{author}</Text>
      <Text>{description}</Text>
      <Image source={{ uri: pic }} style={{ width: '100%', height: 400 }} />
    </View>
  );
}
