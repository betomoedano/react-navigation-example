import * as React from 'react';
import { Button, ScrollView, View, Text } from 'react-native';
import MyInput from './MyInput';

export default function ContactLists({
  contacts,
  onChangeContact,
  onDeleteContact,
}) {
  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          onChange={onChangeContact}
          onDelete={onDeleteContact}
        />
      ))}
    </ScrollView>
  );
}

function Contact({ contact, onChange, onDelete }) {
  const [isEditing, setIsEditing] = React.useState(false);
  let contactContent;
  if (isEditing) {
    contactContent = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={text => onChange({ ...contact, name: text })}
        />
        <Button title="Save" onPress={() => setIsEditing(false)} />
      </View>
    );
  } else {
    contactContent = (
      <View>
        <Text>{contact.name}</Text>
        <Button title="Edit" onPress={() => setIsEditing(true)} />
      </View>
    );
  }
  return (
    <View>
      <Text>{contact.name}</Text>
      {contactContent}
      <Button title="Delete" onPress={() => onDelete(contact.id)} />
    </View>
  );
}
