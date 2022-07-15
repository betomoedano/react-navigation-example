import * as React from 'react';

// using useReducer and createContext to manage the state of the contacts
const initialState = [
  { id: 0, name: 'Sara Lee' },
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jack Doe' },
];
let nextId = 3;

const contactsStore = React.createContext(initialState);
const { Provider } = contactsStore;

function ContactsProvider({ children }) {
  const [contacts, dispatch] = React.useReducer(contactReducer, initialState);

  function handleAddContact(name) {
    dispatch({ type: 'ADD', id: nextId++, name });
  }
  function handleDeleteContact(id) {
    dispatch({ type: 'DELETE', id });
  }
  function handleChangeContact(contact) {
    dispatch({ type: 'CHANGE', contact });
  }

  return (
    <Provider
      value={{
        contacts,
        handleAddContact,
        handleDeleteContact,
        handleChangeContact,
      }}
    >
      {children}
    </Provider>
  );
}

export { ContactsProvider, contactsStore };

// using switch statements to manage the state of the contacts
// convention

export function contactReducer(contacts, action) {
  switch (action.type) {
    case 'ADD': {
      return [...contacts, { id: action.id, name: action.name }];
    }
    case 'DELETE': {
      return contacts.filter(contact => contact.id !== action.id);
    }
    case 'CHANGE': {
      return contacts.map(contact =>
        contact.id === action.contact.id ? action.contact : contact
      );
    }
    default: {
      throw new Error('Unhandled action type: ' + action.type);
    }
  }
}

// using if statements to manage the state of the contacts

// function contactReducer(contacts, action) {
//     if(action.type === 'ADD') {
//         return [...contacts, { id: action.id, name: action.name }];
//     } else if(action.type === 'DELETE') {
//         return contacts.filter(contact => contact.id !== action.id);
//     } else if(action.type === 'CHANGE') {
//         return contacts.map(c => (c.id === action.contact.id ? action.contact : c));
//     } else {
//         throw new Error('Unknown action type: ' + action.type);
//     }
// }
