import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import MyInput from './MyInput';
// import the global store
import { contactsStore } from '../reducers/contactReducer';

// using context to manage the state of the contacts
export default function AddContact() {
  const { handleAddContact } = React.useContext(contactsStore);
  const [name, setName] = React.useState('');

  function handleAdd() {
    setName('');
    handleAddContact(name);
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

// passing props to the component

// export default function AddContact({ onAddContact }) {
//   const [name, setName] = React.useState('');

//   function handleAdd() {
//     setName('');
//     onAddContact(name);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={{ width: '80%' }}>
//         <MyInput label={'Add Contact'} value={name} onChangeText={setName} />
//       </View>
//       <Button title="Add" color={Colors.primary} onPress={handleAdd} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
  },
});
