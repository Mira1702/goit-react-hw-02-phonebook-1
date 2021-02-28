import React, { Component } from 'react';
import shortid from 'shortid';
import Title from './Title';
import PhoneBook from './PhoneBook';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],    
    filter: ''
  }

  formSubmitHandler = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };

    const inContacts = this.state.contacts.find(
            item => item.name === contact.name,
        );
        if (inContacts !== undefined) {
            alert(`${contact.name} is already in contacts`);        
        return;
        } 
       this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));     
  }

  handleRemoveContact = (id) => 
    this.setState(({ contacts }) => ({ contacts: contacts.filter(contact => contact.id !== id) }))
  
  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getfilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };
  
  
  render() {    
    const { filter } = this.state;
    const filteredContacts = this.getfilteredContacts();
    
    return (
      <div>
        <Title title='Phonebook'/>
        <PhoneBook onSubmit={this.formSubmitHandler} />
        <Title title='Contacts' />
        <Filter
          value={filter}
          onChange={this.filterChange}
        />
        <Contacts
          filteredContacts={filteredContacts}
          onRemove={this.handleRemoveContact}          
        />        
      </div>      
    )
  }
}

export default App;