
import React from 'react';
import PropTypes from 'prop-types';
import {ContactUl, ContactLi, ContactText, Button} from './ContactList.styled'

const ContactList = ({ contacts,onClickDelete  }) => {
  return (
    <ContactUl>
    {contacts.map(({ id, name, number }) => (
      <ContactLi key={id}>
        <ContactText>{name} : {number}</ContactText>
        <Button
          type='submit'
          onClick={() => onClickDelete(id)}
        >Delete
        </Button>
      </ContactLi>
    ))}
  </ContactUl>)
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onClickDelete: PropTypes.func.isRequired,
};


export default ContactList
