import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Sara Lee' },
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jack Doe' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state = action.payload;
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(i => i.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
