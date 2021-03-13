import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from '../contact-item/contact-item';
import PropTypes from 'prop-types';
import styles from './contact-list.module.css';

export default function ContactList({ contacts, onRemove }) {
  return (
    <>
      <TransitionGroup component="ul" className={styles.contactList}>
        {contacts.map(i => {
          return (
            <CSSTransition key={i.id} timeout={250} classNames={styles}>
              <ContactItem
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

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemove: PropTypes.func,
};
