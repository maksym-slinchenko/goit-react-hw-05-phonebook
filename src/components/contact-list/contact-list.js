import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from '../contact-item/contact-item';
import styles from './contact-list.module.css';

export default class ContactList extends Component {
  render() {
    const { contacts, onRemove } = this.props;
    return (
      <>
        <TransitionGroup component="ul" className={styles.contactList}>
          {contacts.map(i => {
            return (
              <CSSTransition key={i.id} timeout={250} classNames={styles}>
                <ContactItem
                  id={i.id}
                  name={i.name}
                  number={i.number}
                  onRemove={onRemove}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}
