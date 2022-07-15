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
