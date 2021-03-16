import React, { Component } from 'react';

export default class ContactItem extends Component {
  render() {
    const { name, number, id, onRemove } = this.props;
    return (
      <>
        <li key={id} name={name}>
          {`${name}: ${number}`}
          <button
            type="button"
            onClick={() => {
              onRemove(name);
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
