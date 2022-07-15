import * as React from 'react';
import { Text, View } from 'react-native';
import AddContact from '../components/AddContact';
import ContactLists from '../components/ContactLists';
import { globalStyles } from '../styles/global';
import { contactReducer } from '../reducers/contactReducer';

export default function Contacts() {
  // using reducer
  const [contacts, dispatch] = React.useReducer(
    contactReducer,
    initialContacts
  );

  // using state
  // const [contacts, setContacts] = React.useState(initialContacts);

  // using useReducer to manage the state of the contacts

  function handleAddContact(name) {
    dispatch({ type: 'ADD', id: nextId++, name });
  }
  function handleDeleteContact(id) {
    dispatch({ type: 'DELETE', id });
  }
  function handleChangeContact(contact) {
    dispatch({ type: 'CHANGE', contact });
  }

  // using useState to store the contacts

  // function handleAddContact(name) {
  //   setContacts([...contacts, { id: nextId++, name }]);
  // }
  // function handleDeleteContact(id) {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // }
  // function handleChangeContact(contact) {
  //   setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
  // }

  return (
    <View style={globalStyles.simpleContainer}>
      <AddContact onAddContact={handleAddContact} />
      <ContactLists
        contacts={contacts}
        onChangeContact={handleChangeContact}
        onDeleteContact={handleDeleteContact}
      />
    </View>
  );
}

let nextId = 3;
const initialContacts = [
  { id: 0, name: 'Sara Lee' },
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jack Doe' },
];
