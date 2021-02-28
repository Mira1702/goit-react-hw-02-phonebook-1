import React from 'react';

const ContactItem = ({ name, number, id, onRemove }) => {  
  return (
    <li >
      <span>{name}</span>: <span>{number}</span>
      <button        
        type="button"
        onClick={() => {onRemove(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

const Contacts = ({ filteredContacts, onRemove }) => {
  return (
    <ul>
      {filteredContacts.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default Contacts;