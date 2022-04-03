import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import testData from './data.json';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [...testData],
    filter: '',
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredList;
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  handleOnFormSubmit = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(name + ' is already in contacts');
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          { name: name, id: uuidv4(), number: number },
          ...prevState.contacts,
        ],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleOnFormSubmit={this.handleOnFormSubmit} />

        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          filter={filter}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
