import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook-actions';
import Contact from './Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contacts__list}>
    {contacts.length >= 1 ? (
      contacts.map(({ id, name, phone }) => (
        <Contact name={name} phone={phone} onDeleteContact={() => onDeleteContact(id)} key={id} />
      ))
    ) : (
      <p className={styles.contacts__zero}>No contacts found</p>
    )}
  </ul>
);
ContactList.defaultProps = {
  onDeleteContact: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
const getVisibleContact = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
