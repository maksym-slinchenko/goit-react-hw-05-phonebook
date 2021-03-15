import React, { Component } from 'react';

export default class ContactItem extends Component {
  componentWillUnmount() {
    console.log(this.props.deletedName);
    console.log(this.props.name);
  }
  render() {
    const { name, number, id, onRemove, toSetState } = this.props;
    return (
      <>
        <li key={id} name={name}>
          {`${name}: ${number}`}
          <button
            type="button"
            onClick={async () => {
              await toSetState(name);
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
