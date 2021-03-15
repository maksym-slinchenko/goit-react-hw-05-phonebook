import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from '../contact-item/contact-item';
import styles from './contact-list.module.css';

export default class ContactList extends Component {
  state = { deletedName: '' };

  toSetDeletedName = name => this.setState({ deletedName: name });

  render() {
    const { contacts, onRemove } = this.props;
    return (
      <>
        <TransitionGroup component="ul" className={styles.contactList}>
          {contacts.map(i => {
            return (
              <CSSTransition
                in={i.name !== this.state.deletedName}
                appear={true}
                key={i.id}
                timeout={250}
                classNames={styles}
              >
                <ContactItem
                  deletedName={this.state.deletedName}
                  id={i.id}
                  name={i.name}
                  number={i.number}
                  onRemove={onRemove}
                  toSetState={this.toSetDeletedName}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}

// import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import ContactItem from '../contact-item/contact-item';
// import PropTypes from 'prop-types';
// import styles from './contact-list.module.css';

// export default function ContactList({ contacts, onRemove }) {
//   return (
//     <>
//       <TransitionGroup component="ul" className={styles.contactList}>
//         {contacts.map(i => {
//           return (
//             <CSSTransition
//               // in={i.name !== deletedName}
//               // appear={true}
//               key={i.id}
//               timeout={250}
//               classNames={styles}
//             >
//               <ContactItem
//                 // deletedName={deletedName}
//                 name={i.name}
//                 number={i.number}
//                 onRemove={onRemove}
//               />
//             </CSSTransition>
//           );
//         })}
//       </TransitionGroup>
//     </>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onRemove: PropTypes.func,
// };
