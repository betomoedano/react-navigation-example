import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import MyInput from './MyInput';

export default function AddContact({ onAddTask }) {
  const [name, setName] = React.useState('');

  function handleAdd() {
    setName('');
    onTaskAdded(name);
  }

  return (
    <View style={styles.container}>
      <View style={{ width: '80%' }}>
        <MyInput label={'Add Contact'} value={name} onChangeText={setName} />
      </View>
      <Button title="Add" color={Colors.primary} onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
});
