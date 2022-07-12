import * as React from 'react';
import { Text, View } from 'react-native';
import AddContact from '../components/AddContact';
import ContactLists from '../components/ContactLists';
import { globalStyles } from '../styles/global';

export default function Contacts() {
  const [contacts, setContacts] = React.useState(initialContacts);

  function handleAddContact(name) {
    setContacts([...contacts, { id: nextId++, name }]);
  }
  function handleDeleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  function handleChangeContact(contact) {
    setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
  }
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Contacts</Text>
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
