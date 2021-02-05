import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import ContactsEditor from '../ContactsEditor/ContactsEditor';
import ContactsList from '../ContactsList/ContactList';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';
import styles from '../../styles/main.module.css';
const App = ({ contacts }) => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem('contacts');
  //   if (persistedContacts) {
  //     this.setState({
  //       contacts: JSON.parse(persistedContacts),
  //     });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  // addContact = (name, phone) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     phone,
  //   };
  //   if (contacts.some(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     this.setState(prevState => {
  //       return {
  //         contacts: [...prevState.contacts, contact],
  //       };
  //     });
  //   }
  // };
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };
  // changeFilter = filter => {
  //   this.setState({ filter });
  // };
  // getVisibleContact = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // };

  // const visibleContacts = this.getVisibleContact();
  return (
    <div className={styles.container}>
      <Section title="Enter contact">
        <ContactsEditor />
        {contacts.length > 1 && <Filter />}
      </Section>
      <Section title="Your contacts">
        <ContactsList />
      </Section>
    </div>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(App);
