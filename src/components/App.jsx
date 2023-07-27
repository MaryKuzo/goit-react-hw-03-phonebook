import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    this.state.contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }


    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  };


  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };


  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onClickDelete={this.deleteContact}
        />

      </div>

    )
  };
}


export default App
