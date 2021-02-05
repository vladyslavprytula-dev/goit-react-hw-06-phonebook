import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter, getVisibleContact } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, { type, payload }) => {
    console.log(payload);
    if (state.some(contact => contact.name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return state;
    } else return [...state, payload];
  },
  [deleteContact]: (state, { type, payload }) => state.filter(contact => contact.id !== payload),
  [getVisibleContact]: (state, { type, payload }) =>
    state.filter(contact => contact.name.toLowerCase().includes(payload.filter.toLowerCase())),
});

const filter = createReducer('', {
  [changeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
