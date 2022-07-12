import * as React from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { Colors } from '../constants/colors';
import MyInput from './MyInput';
import { getRandomPhoto } from '../utils/randomPhoto';

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
  const memoPhoto = React.useMemo(() => getRandomPhoto(), []);

  if (isEditing) {
    contactContent = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={text => onChange({ ...contact, name: text })}
        />
      </View>
    );
  } else {
    contactContent = (
      <View style={styles.row}>
        <Text>{contact.name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image source={memoPhoto} style={styles.image} />
        {contactContent}
      </View>
      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        ) : (
          <Button title="Edit" onPress={() => setIsEditing(true)} />
        )}
        <Button title="Delete" onPress={() => onDelete(contact.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
