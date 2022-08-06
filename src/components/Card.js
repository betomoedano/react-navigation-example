import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/colors';
import { useSelector } from 'react-redux';
import MyButton from './MyButton';

export default function Card() {
  const { userToken } = useSelector(state => state.auth);
  const user = useSelector(state => state.user);

  function doSomething() {
    console.log('1');
    console.log('2');
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: user.photoUrl }} style={styles.img} />
      </View>
      <Text style={styles.name}>{user.id}</Text>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.name}>{userToken}</Text>
      <Text style={styles.name}>{user.createdAt}</Text>
      <MyButton title={'Add Friend'} onPress={doSomething} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'snow',
    width: '85%',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.primary,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    flexShrink: 1,
  },
});
