import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import MyInput from '../components/MyInput';
import { globalStyles } from '../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../features/user/user';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function Todos() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  const handleAdd = async () => {
    const todo = {
      id: Math.random().toString(),
      text,
      createdAt: Date.now(),
    };
    const userRef = doc(db, 'users', user.id);
    await updateDoc(userRef, {
      todos: [...user.todos, todo],
    });
    dispatch(addTodo(todo));
    console.log('added todo', todo);
  };

  const handleDelete = async id => {
    dispatch(deleteTodo(id));
    const userRef = doc(db, 'users', user.id);
    await updateDoc(userRef, {
      todos: user.todos.filter(todo => todo.id !== id),
    });
  };

  return (
    <View style={globalStyles.simpleContainer}>
      <Text style={globalStyles.title}>Todos</Text>
      <View style={[styles.row, { width: '80%' }]}>
        <MyInput value={text} onChangeText={setText} label={'Add'} />
        <Button title="Add" onPress={handleAdd} />
      </View>
      {user.todos.map(todo => (
        <View key={todo.id} style={styles.row}>
          <Text>{todo.text}</Text>
          <Text>{new Date(todo.createdAt).toDateString()}</Text>
          <Button title="delete" onPress={() => handleDelete(todo.id)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
