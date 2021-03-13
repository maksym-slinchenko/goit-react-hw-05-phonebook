import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/contacts-form/contacts-form';
import ContactList from './components/contact-list/contact-list';
import Filter from './components/filter/filter';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Парсинг контактов в стэйт из локал сторэдж
  componentDidMount() {
    const primaryContacts = JSON.parse(localStorage.getItem('contacts'));
    if (primaryContacts) {
      this.setState({ contacts: primaryContacts });
    }
  }

  // Запись контактов в Local Storage
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // Создания контактов
  createContacts = (name, number) => {
    const prevState = this.state.contacts;
    this.setState({
      contacts: [
        ...prevState,
        {
          name: name,
          number: number,
          id: uuidv4(),
        },
      ],
    });
  };

  // Удаление контакта
  removeContact = name => {
    const { contacts } = this.state;
    const i = contacts.findIndex(c => c.name === name);
    contacts.splice(i, 1);
    this.setState({
      contacts: contacts,
    });
  };

  // Фильтрация по имени
  changeFilter = filter => {
    this.setState({ filter });
  };
  // Возвращение отфильтрованного массива
  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="Logo-slider"
        >
          <h1 className="App-logo">Phonebook</h1>
        </CSSTransition>
        <ContactForm
          onCreateContacts={this.createContacts}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeFiter={this.changeFilter} />
        <ContactList
          contacts={this.getFilterContacts()}
          onRemove={this.removeContact}
        />
      </>
    );
  }
}
