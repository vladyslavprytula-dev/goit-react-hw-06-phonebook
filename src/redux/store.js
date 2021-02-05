import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook-reducer';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});
const persistedStateItems = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];
const preloadedState = {
  contacts: {
    items: persistedStateItems,

    filter: '',
  },
};
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});
store.subscribe(() => {
  localStorage.setItem('items', JSON.stringify(store.getState().contacts.items));
});

export default store;
