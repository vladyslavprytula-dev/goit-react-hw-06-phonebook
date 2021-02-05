import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('phoneBook/add', (name, phone) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      phone,
    },
  };
});
export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');
export const getVisibleContact = createAction('phonebook/getVisibleContact');
